import json, glob, sys

merged = {}

for file in glob.glob("./raw_data/*.json"):
    with open(file, encoding="utf-8") as f:
        data = json.load(f)
        for key in data:
            if key in merged:
                print(f"{file} 中的键 '{key}' 与之前的文件有冲突")
                sys.exit(1)
        merged.update(data)

with open("data.json", "w", encoding="utf-8") as out:
    json.dump(merged, out, indent=None, ensure_ascii=False, allow_nan=False)
