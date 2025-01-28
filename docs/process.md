Process - instancr of EventEmitter class.

Events emitted by process object: 
1. exit
2. beforeExit
3. uncaughtException
4. SIGINT -> process exits

Methods of process object: 
1. abort()
2. exit(0) -> with status code
3. cwd()
4. kill(pid, signal)
5. nextTick(callback) -> execute callback in next eventloop iteration
8. on(event, callback)
9. emit(event)

properties:
1. argv
2. env
3. pid

childProcess: 
1. spawn():
  - Used to start a new process.
  - Outputs data in real-time via streams.
  - const child = spawn("ls", ["-lh"]);
    child.stdout.on("data", (data) => {
        console.log(`Output: ${data}`);
      });

    child.stderr.on("data", (data) => {
        console.error(`Error: ${data}`);
     });

2. exec();
  - Executes a command and buffers the entire output (not streamed).
  - exec("ls -lh", (error, stdout, stderr) =>{})

3. fork()
  - A special case of spawn() for creating a new Node.js process.
  - Useful for running separate JavaScript files as child processes.
  - const child = fork("childScript.js");
    child.on('message', (message)=>{});

IPC: child.send() and process.on()


Stream: 
- Stream is the flow of large continuous data. 
- it allow us to process the large data in chunks rather than loading everything in memory together.
- efficient to working with large data like videos
- Streams work asynchronously, and they are non-blocking.
- Streams emit several events (data, end, error, etc.) to notify the application about its state.
- const readableStream = fs.createReadStream("example.txt", { encoding: "utf8" });

Buffer:
- A Buffer is a temporary storage area for binary data. 
- It is used to handle raw binary data (like files, images) and allows reading or writing of data directly to memory.
 

