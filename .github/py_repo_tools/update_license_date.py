import json
import datetime

# Opening JSON file
config_file_path = '.github/py_repo_tools/repo_config.json'
with open(config_file_path) as f:
    config = json.load(f)

# Define the filename to replace content in
file_name = "LICENSE.md"
text_to_replace = "YEAR"

# Get the current year
current_year = datetime.datetime.now().year

# Open the file
with open(file_name, 'r') as f:
    # Read the file contents
    contents = f.read()
    # Replace the file contents
    contents = contents.replace(text_to_replace, str(current_year))

# Write the updated contents back to the file
with open(file_name, 'w') as f:
    f.write(contents)
