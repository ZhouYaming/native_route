package com.native_route.Module;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.getui.gs.sdk.GsManager;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;


public class CountModule extends ReactContextBaseJavaModule {
    private String MODULE_NAME = "countModule";

    private ReactApplicationContext mContext;

    public CountModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.mContext = reactContext;
    }

    @Override
    public String getName() {
        return MODULE_NAME;
    }

    // 开始计时
    @ReactMethod
    public void startCount(String id){
        GsManager.getInstance().onBeginEvent(id);
    }
    // 结束计时
    @ReactMethod
    public void endCount(String id){
        GsManager.getInstance().onEndEvent(id);
    }
    // 自定义统计次数
    @ReactMethod
    public void count(String id){
        GsManager.getInstance().onEvent(id);
    }
}