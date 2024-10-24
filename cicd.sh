set -e

npm run build
docker build -t localhost:32000/sample-web-app:latest .
docker push localhost:32000/sample-web-app:latest
kubectl apply -f deployment.yml