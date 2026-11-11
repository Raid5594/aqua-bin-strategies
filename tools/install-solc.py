#!/usr/bin/env python3
"""Download pinned solc from the official distribution and verify its published SHA-256."""
import hashlib
import json
import os
import platform
from pathlib import Path
from urllib.request import urlopen

system = platform.system()
machine = platform.machine()
if system == "Darwin":
    target = "macosx-amd64"  # Official 0.8.30 macOS distribution; Apple Silicon requires Rosetta.
elif system == "Linux" and machine in ("x86_64", "amd64"):
    target = "linux-amd64"
else:
    raise SystemExit("Install solc 0.8.30 using your platform toolchain, then pass forge --use <compiler>.")
base = "https://raw.githubusercontent.com/ethereum/solc-bin/gh-pages/" + target + "/"
with urlopen(base + "list.json") as response:
    metadata = json.load(response)
filename = metadata["releases"]["0.8.30"]
build = next(item for item in metadata["builds"] if item["path"] == filename)
with urlopen(base + filename) as response:
    binary = response.read()
actual = "0x" + hashlib.sha256(binary).hexdigest()
if actual != build["sha256"]:
    raise SystemExit("Compiler SHA-256 mismatch")
destination = Path(__file__).resolve().parent / "solc-0.8.30"
destination.write_bytes(binary)
os.chmod(destination, 0o755)
print("Installed", destination, "SHA256", actual)
