//
//  CustomBtn.h
//  NativeSupport
//
//  Created by yjs on 2019/3/1.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <React/RCTComponent.h>
NS_ASSUME_NONNULL_BEGIN

@interface CustomBtn : UIButton
@property (nonatomic,copy)NSString *title;
@property (nonatomic, copy) RCTBubblingEventBlock onBtnClick;
@end

NS_ASSUME_NONNULL_END
