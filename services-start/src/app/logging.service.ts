export class LoggingService {
    logStatusChange(status: string) {
        console.log('A server status changed, NEW status: ' + status);
    }
}