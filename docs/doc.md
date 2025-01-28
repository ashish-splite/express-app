kafka : 
1. Can handle hight throughput
2. High fault tolerence, even machine failure
3. can handle millions of msgs in one second
4. event streaming platform
5. pull mechanism
6. retains messages for a configurable period,
7. use case: real time analytics, monitoring activites, log aggregations

websockets:
1. low latency
2. real time, bi-directional
3. event based communications
4. use single TCP connection 
5. it starts with http handshaked request and then upgrate to websocket protocol 
  and connections stays open
6. better than long polling, as it need one connection only.  

redis:
1. in-memory key value store
2. Use as caching, pubSub model and message broker
3. can be configure for persistence storage( in disks)
4. very fast data retrieval - data is stored in main memory not disks.

rabbitmq:
1. implement AMQP(Advance message queue protocol)
2. low latency
3. Suitable when throughput is low
4. Message remains in the queue until consumer consume it.
5. push mechannism, only one consumer can consume messsages.