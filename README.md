***first install redis***
$ wget http://download.redis.io/releases/redis-3.0.2.tar.gz   
$ tar xzf redis-3.0.2.tar.gz   
$ cd redis-3.0.2   
$ make   

run redis   
$ src/redis-server   

***then install redis support package for node***

npm install hireids redis

run   
node test.js   

***Test with get requset: http://localhost:8888?guid=xxxxx&value=vvvvv***




