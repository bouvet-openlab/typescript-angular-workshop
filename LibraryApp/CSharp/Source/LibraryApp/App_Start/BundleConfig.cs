using System.Web.Optimization;

namespace LibraryApp.App_Start
{
    public class BundleConfig
    {
        public class BundleNames
        {
            public class Scripts
            {
                public const string LibraryApp = "~/bundles/scripts/libraryapp";
                public const string ThirdpartyScripts = "~/bundles/scripts/thirdparty";
            }

            public class Styles
            {
                public const string ThirdpartyStyles = "~/bundles/styles/thirdparty";
            }
        }


        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle(BundleNames.Styles.ThirdpartyStyles).IncludeDirectory("~/Styles/css/", "*.css", true));

            bundles.Add(new ScriptBundle(BundleNames.Scripts.ThirdpartyScripts)
                .Include("~/Scripts/jquery-2.1.3.min.js")
                .Include("~/Scripts/angular.min.js")
                .Include("~/Scripts/angular-route.min.js")
                .Include("~/Scripts/bootstrap.min.js")
                );

            bundles.Add(new ScriptBundle(BundleNames.Scripts.LibraryApp)
                .Include("~/App/references.js")
                .IncludeDirectory("~/App/", "*.js", true)
                .IncludeDirectory("~/App/", "*.js.map", true)
                );
            
        }
    }
}