Welcome to Mern MicroService Pizza Store App

![pizza-store](https://res.cloudinary.com/suberiq/image/upload/v1696771354/Pizza-store_xnzbmv.jpg)

### If create docker image

```javascript
  sudo docker build -t auth-service:dev -f docker/dev/Dockerfile .

```

### Running the Express App in a Docker Containe

```javascript
  sudo docker run --rm -it -v "$(pwd)":/usr/src
/app -v /usr/src/app/node_modules --env-file "$(pwd)"/.env -p 5501:5501 -e
NODE_ENV=development auth-service:dev
```
