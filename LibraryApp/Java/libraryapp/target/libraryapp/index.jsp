<!DOCTYPE html>

<html ng-app="libraryApp">
<head>
    <title>LibraryApp Java</title>
    <link href="styles/css/bootstrap.css" type="text/css" rel="stylesheet" />
    <link href="styles/css/bootstrap-theme.css" type="text/css" rel="stylesheet" />
</head>
<body ng-controller="libraryAppCtrl">
<div class="container">
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Library App</a>
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li ng-class="{ active: isPublic }">
                        <a ng-href="#/public">Public</a>
                    </li>
                    <li ng-class="{ active: isAdmin }">
                        <a ng-href="#/admin">Admin</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div ng-view></div>

</div>

<script src="scripts/jquery-2.1.3.min.js" type="application/javascript"></script>
<script src="scripts/angular.min.js" type="application/javascript"></script>
<script src="scripts/angular-route.min.js" type="application/javascript"></script>
<script src="scripts/bootstrap.min.js" type="application/javascript"></script>

<script src="app/app.js" type="application/javascript"></script>
<script src="app/config/appSettings.js" type="application/javascript"></script>
<script src="app/config/libraryAppConfig.js" type="application/javascript"></script>

<script src="app/controllers/adminCtrl.js" type="application/javascript"></script>
<script src="app/controllers/libraryAppCtrl.js" type="application/javascript"></script>
<script src="app/controllers/publicCtrl.js" type="application/javascript"></script>

<script src="app/directives/searchBooksCtrl.js" type="application/javascript"></script>
<script src="app/directives/searchBooksDrct.js" type="application/javascript"></script>

<script src="app/models/book.js" type="application/javascript"></script>

<script src="app/services/bookService.js" type="application/javascript"></script>
</body>
</html>