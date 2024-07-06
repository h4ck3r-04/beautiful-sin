echo "Setting up Virtual Environment for python"
python3 -m venv env
echo "Virtual Environment Setup Complete"
echo "Activating Virtual Environment"
source env/bin/activate
echo "Virtual Environment Activated"
echo "Installing Dependencies"
python3 -m pip install -r requirements.txt
echo "Dependencies Installed"

echo "Building Shared Object For Aquatone"
cd framework/aquatone/
go build -buildmode=c-shared -o aquatone.so .
cd ../..
echo "Aquatone Build Complete"

echo "Migrating Settings"
python3 manage.py migrate
echo "Settings Migrated"

echo "Execute the following commands to start the application"
echo "source env/bin/activate"
echo "python3 manage.py runserver"