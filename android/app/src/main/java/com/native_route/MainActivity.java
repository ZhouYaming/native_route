package com.native_route;
import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivity;
import com.getui.reactnativegetui.GetuiModule;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "native_route";
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        GetuiModule.initPush(this);
    }
}
