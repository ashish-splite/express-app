I used:  
1. Caching using redis
2. Websockets instead of long pooling
3. CDN (instead of serving file statically)
4. Indexing on most frequently queried columns and fields.
5. Use pagination and batch requests
6. replace lodash with ES6+ built-in methods.(map, find, every, some, reduce, filter, indexOf);
7. express-rate-limit -> throttle excessive requests.
8. Set request timeouts to avoid hanging resources.


Others
1. Indexing: Create appropriate indexes on frequently queried fields.
2. Use efficient queries using Joins and avoid multiple iterations in tables
3. Connection Pooling: Use connection pools to reuse database connections.
4. Sharding and Replication: Scale databases horizontally and ensure high availability.

5. Avoid synchronous/blocking operations where asynchronous alternatives exist, leverage Promises for async tasks.
6. Load balancing, rate limiting and throttling.
7. Avoid unnecessary middlewares
8. Use Node's cluster module to run multiple instances of the app on multi-core servers.

Optimising mongodb
1. proper indexing: (collection.createIndex({field: 1}))
2. Query Optimization : retrieve only required fields, use projections, filter early to reduce data set.
3. Avoid regex: too expensive - iteration goes on exponential
4. Aggragation pipeline: data transformations and computations.
5. pagination: retrieve data in chunks.(limit)
6. connection pooling: reduce the overhead of establishing connection with database on every request.
7. caching: redis
8. explain: for query analysiis.








