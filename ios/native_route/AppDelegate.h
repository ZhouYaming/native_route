/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>
#import <RCTGetuiModule/RCTGetuiModule.h>
#if __IPHONE_OS_VERSION_MAX_ALLOWED >= __IPHONE_10_0
#import <UserNotifications/UserNotifications.h>
#endif
#define kGtAppId @"Ay1Gpoer2R8OiPN9IjWlo8"
#define kGtAppKey @"kpUz0PGAzw6uRzA0a7rHJ5"
#define kGtAppSecret @"kk2KfTZdp58VnyHOfh7At6"


@interface AppDelegate : UIResponder <UIApplicationDelegate,UNUserNotificationCenterDelegate,GeTuiSdkDelegate, RCTBridgeDelegate>

@property (nonatomic, strong) UIWindow *window;

@end
