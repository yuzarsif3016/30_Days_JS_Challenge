class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(item) {
      this.items.push(item);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        throw new Error("Queue is empty");
      }
      return this.items.shift();
    }
  
    front() {
      if (this.isEmpty()) {
        throw new Error("Queue is empty");
      }
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    toString() {
      return this.items.toString();
    }
  }
  
  // Simulate a printer queue
  class PrinterQueue {
    constructor() {
      this.queue = new Queue();
    }
  
    // Add a print job to the queue
    addPrintJob(job) {
      console.log(`Adding job: ${job}`);
      this.queue.enqueue(job);
    }
  
    // Process the next print job in the queue
    processNextJob() {
      if (this.queue.isEmpty()) {
        console.log("No jobs to process.");
        return;
      }
      const job = this.queue.dequeue();
      console.log(`Processing job: ${job}`);
    }
  
    // Display the current status of the queue
    displayQueue() {
      if (this.queue.isEmpty()) {
        console.log("The queue is empty.");
      } else {
        console.log(`Current queue: ${this.queue.toString()}`);
      }
    }
  }
  
  // Example usage
  const printerQueue = new PrinterQueue();
  
  printerQueue.addPrintJob("Document1.pdf");
  printerQueue.addPrintJob("Document2.docx");
  printerQueue.addPrintJob("Document3.xlsx");
  
  printerQueue.displayQueue();  // Output: Current queue: Document1.pdf,Document2.docx,Document3.xlsx
  
  printerQueue.processNextJob();  // Output: Processing job: Document1.pdf
  printerQueue.processNextJob();  // Output: Processing job: Document2.docx
  
  printerQueue.displayQueue();  // Output: Current queue: Document3.xlsx
  
  printerQueue.processNextJob();  // Output: Processing job: Document3.xlsx
  printerQueue.processNextJob();  // Output: No jobs to process.
  
  printerQueue.displayQueue();  // Output: The queue is empty.
  