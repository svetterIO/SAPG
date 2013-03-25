//
//  HttpController.m
//  Anel_Power_Control
//
//  Created by Baskus Marti on 24.03.13.
//
//

#import "HttpController.h"
#import "GCDAsyncSocket.h"
#import <Cordova/CDV.h>

@implementation HttpController

@synthesize com_private_condition;
@synthesize com_private_theWaitingThread;

CDVPluginResult* pluginResult_HTTP = nil;
GCDAsyncSocket* tcpSocket_Http;
NSString* respond_http;

- (void)sendMessage:(CDVInvokedUrlCommand *)command
{
	
    NSString* header = [command.arguments objectAtIndex:0];
    NSString* body = [command.arguments objectAtIndex:1];
    NSString* ip = [command.arguments objectAtIndex:2];
    int targetPort = [[command.arguments objectAtIndex:3] intValue];
   
    tcpSocket_Http =  [[GCDAsyncSocket alloc] initWithDelegate:self delegateQueue:dispatch_get_main_queue()];
    
    NSError *err = nil;
    [tcpSocket_Http connectToHost:ip onPort:targetPort error:&err];
    
    NSLog(@"The request format is: \n%@",header);
    NSData* headerD1 = [header dataUsingEncoding:NSUTF8StringEncoding];
    [tcpSocket_Http writeData:headerD1 withTimeout:-1 tag:0];
    
    NSLog(@"The request format is: \n%@",body);
    NSData* bodyD = [body dataUsingEncoding:NSUTF8StringEncoding];
    [tcpSocket_Http writeData:bodyD withTimeout:-1 tag:0];

    [tcpSocket_Http readDataWithTimeout:3 tag:0];
    [self waitForConditionWithTimeout:3];
    pluginResult_HTTP = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:respond_http];
    
    [self.commandDelegate sendPluginResult:pluginResult_HTTP callbackId:command.callbackId];
    
    [tcpSocket_Http disconnectAfterReading];
}
- (BOOL)waitForConditionWithTimeout:(NSTimeInterval)aTimeout
{
    self.com_private_condition = NO;
    self.com_private_theWaitingThread = [NSThread currentThread];
    NSDate* theStartDate = [NSDate date];
    NSDate* theEndDate = [NSDate dateWithTimeIntervalSinceNow:aTimeout];
    do
    {
        [[NSRunLoop currentRunLoop] runMode:NSDefaultRunLoopMode
                                 beforeDate:theEndDate];
        NSTimeInterval theElapsedTime = -[theStartDate timeIntervalSinceNow];
        if (theElapsedTime >= aTimeout)
        {
            return NO;
        }
        if (self.com_private_condition)
        {
            return YES;
        }
    } while (YES);
}

- (void)signalCondition
{
    [self performSelector:@selector(com_private_signalCondition:)
                 onThread:self.com_private_theWaitingThread
               withObject:nil waitUntilDone:NO];
}

- (void)com_private_signalCondition:(id)aParam
{
    self.com_private_condition = YES;
}
-(void)socket:(GCDAsyncSocket *)sock didReadData:(NSData *)data withTag:(long)tag{
    
       respond_http = [NSString stringWithUTF8String:[data bytes]];
        NSLog(@"MESSAGE: %@", respond_http);

    
}
@end
