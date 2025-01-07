wget https://raw.githubusercontent.com/devcaldev/proto/refs/heads/main/devcal.proto -O devcal.proto 

grpc_tools_node_protoc --js_out=import_style=commonjs,binary:. --grpc_out=.:. devcal.proto

rm devcal.proto

sed -i -e "s/'grpc'/'@grpc\/grpc-js'/g" devcal_grpc_pb.js

rm devcal_grpc_pb.js-e
