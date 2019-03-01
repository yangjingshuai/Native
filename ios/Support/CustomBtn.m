//
//  CustomBtn.m
//  NativeSupport
//
//  Created by yjs on 2019/3/1.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "CustomBtn.h"

@implementation CustomBtn

- (instancetype)initWithFrame:(CGRect)frame{
  if(self = [super initWithFrame:frame]){
//    [self sizeToFit];
//    [self setFrame:CGRectMake(100, 100, 100, 40)];
    self.backgroundColor = [UIColor redColor];
    [self addTarget:self action:@selector(btnClick) forControlEvents:UIControlEventTouchDown];
  }
  return self;
}

//属性
-(void)setTitle:(NSString *)title{
  _title = title;
  [self setTitle:title forState:UIControlStateNormal];
}

//需要注意的是，所有 RCTBubblingEventBlock 必须以 on 开头。然后在 RNTMapManager上声明一个事件处理函数属性，将其作为所暴露出来的所有视图的委托，并调用本地视图的事件处理将事件转发至JS。
//原生ui组件执行js方法
-(void)btnClick{
  self.onBtnClick(@{@"title":self.title,@"description":@"调用RN方法"});
}

@end
