echo "Building Shared Object For Aquatone"
cd framework/aquatone/
go build -buildmode=c-shared -o aquatone.so .
cd ../..
echo "Aquatone Build Complete"