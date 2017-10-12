using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Com.Reactlibrary.RNReactNativeIconSheet
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNReactNativeIconSheetModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNReactNativeIconSheetModule"/>.
        /// </summary>
        internal RNReactNativeIconSheetModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNReactNativeIconSheet";
            }
        }
    }
}
