//
//  CustomBtnManager.m
//  NativeSupport
//
//  Created by yjs on 2019/3/1.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "CustomBtnManager.h"
#import "CustomBtn.h"


@implementation CustomBtnManager

RCT_EXPORT_MODULE();
RCT_EXPORT_VIEW_PROPERTY(title, NSString);
RCT_EXPORT_VIEW_PROPERTY(onBtnClick, RCTBubblingEventBlock);

- (UIView *)view{
  CustomBtn *btn = [CustomBtn new];
  return btn;
}

//js调用原生
RCT_EXPORT_METHOD(rnCallNative:(NSDictionary*)dic resolve:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject){
  resolve(@{@"title":@"rnCallNative",@"description":@"回调"});
}

@end
