//
//  UPnPController.h
//  Anel_Power_Control
//
//  Created by Baskus Marti on 08.03.13.
//
//

#import <Cordova/CDV.h>

@interface UPnPController : CDVPlugin

@property (nonatomic, assign) BOOL com_private_condition;
@property (nonatomic, assign) NSThread* com_private_theWaitingThread;

- (void)getRouterInfo:(CDVInvokedUrlCommand*)command;

@end