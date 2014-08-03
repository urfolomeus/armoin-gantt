'use strict';

/* App Module */

var app = angular.module('ganttApp', [ ]);

app.controller('MainGanttCtrl', function($scope) {

  $scope.tasks = {
    data:[
      {"id": 1, "text": "Release 1", "start_date": "16-06-2014", "duration": 56, "progress": 0.75, "open": true},
      
      {"id": 2, "text": "Iteration 2", "start_date": "16-06-2014", "duration": 14, "progress": 1, "open": true, parent: 1},
      {"id": 3, "text": "User homepage - index", "start_date": "16-06-2014", "duration": 14, "progress": 1, parent: 2},
      {"id": 4, "text": "Uploads - images", "start_date": "16-06-2014", "duration": 14, "progress": 1, parent: 2},
      
      {"id": 5, "text": "Iteration 3", "start_date": "30-06-2014", "duration": 14, "progress": 1, "open": true, parent: 1},
      {"id": 7, "text": "User homepage - show", "start_date": "30-06-2014", "duration": 14, "progress": 1, parent: 5},
      {"id": 148, "text": "Use Amazon S3 for storage", "start_date": "30-06-2014", "duration": 14, "progress": 1, parent: 5},
      {"id": 149, "text": "Uploads - styling", "start_date": "30-06-2014", "duration": 14, "progress": 1, parent: 5},
      {"id": 9, "text": "Supply Category data", "start_date": "04-07-2014", "duration": 0, "type":gantt.config.types.milestone, "progress": 1, parent: 5},
      {"id": 150, "text": "Access further details by clicking asset", "start_date": "04-07-2014", "duration": 0, "type":gantt.config.types.milestone, "progress": 1, parent: 5},
      
      {"id": 13, "text": "Iteration 4", "start_date": "14-07-2014", "duration": 14, "progress": 1, "open": true, parent: 1},
      {"id": 6, "text": "Uploads - add metadata", "start_date": "14-07-2014", "duration": 14, "progress": 1, parent: 13},
      {"id": 8, "text": "Uploads - validation", "start_date": "14-07-2014", "duration": 14, "progress": 1, parent: 13},
      {"id": 151, "text": "Fix IE styling issues", "start_date": "14-07-2014", "duration": 14, "progress": 1, parent: 13},
      {"id": 152, "text": "Fix mobile styling issues", "start_date": "14-07-2014", "duration": 14, "progress": 1, parent: 13},
      {"id": 153, "text": "Fix photo rotation issues", "start_date": "14-07-2014", "duration": 14, "progress": 1, parent: 13},
      
      {"id": 24, "text": "Iteration 5", "start_date": "28-07-2014", "duration": 14, "progress": 0, "open": true, parent: 1},
      {"id": 17, "text": "Authentication - Register users", "start_date": "28-07-2014", "duration": 9, "progress": 0, parent: 24},
      {"id": 18, "text": "Browsing - asset page", "start_date": "28-07-2014", "duration": 9, "progress": 0, parent: 24},
      {"id": 19, "text": "Browsing - content detail", "start_date": "28-07-2014", "duration": 9, "progress": 0, parent: 24},
      {"id": 11, "text": "Uploads - add location information", "start_date": "28-07-2014", "duration": 9, "progress": 0, parent: 24},
      {"id": 14, "text": "Attribution field", "start_date": "28-07-2014", "duration": 9, "progress": 0, parent: 24},
      {"id": 154, "text": "Change date to be more flexible", "start_date": "28-07-2014", "duration": 9, "progress": 0, parent: 24},
      {"id": 20, "text": "Create Capital Collections homepage", "start_date": "06-08-2014", "duration": 5, "progress": 0, parent: 24},
      {"id": 21, "text": "Testing with Stakeholders", "start_date": "11-08-2014", "duration": 5, "progress": 0, parent: 24},
      {"id": 22, "text": "v1 T&Cs", "start_date": "08-08-2014", "duration": 0, "type":gantt.config.types.milestone, "progress": 0, parent: 24},

      
      {"id": 23, "text": "Release 2", "start_date": "11-08-2014", "duration": 14, "progress": 0, "open": true},
      
      {"id": 155, "text": "Iteration 6", "start_date": "11-08-2014", "duration": 14, "progress": 0, "open": true, parent: 23},
      {"id": 15, "text": "Uploads - help tips", "start_date": "11-08-2014", "duration": 9, "progress": 0, parent: 155},
      {"id": 12, "text": "Uploads - assign a category", "start_date": "11-08-2014", "duration": 9, "progress": 0, parent: 155},
      {"id": 28, "text": "User homepage - edit", "start_date": "11-08-2014", "duration": 9, "progress": 0, parent: 155},
      {"id": 29, "text": "User homepage - delete", "start_date": "11-08-2014", "duration": 9, "progress": 0, parent: 155},
      {"id": 25, "text": "Uploads - audio", "start_date": "11-08-2014", "duration": 9, "progress": 0, parent: 155},
      {"id": 26, "text": "Uploads - limit audio uploads", "start_date": "11-08-2014", "duration": 9, "progress": 0, parent: 155},
      {"id": 27, "text": "Uploads - save and add another", "start_date": "11-08-2014", "duration": 9, "progress": 0, parent: 155},
      {"id": 30, "text": "Testing with a range of devices", "start_date": "20-08-2014", "duration": 5, "progress": 0, parent: 155},
      {"id": 31, "text": "Testing with Stakeholders", "start_date": "25-08-2014", "duration": 5, "progress": 0, parent: 155},
      
      
      {"id": 32, "text": "Release 3", "start_date": "11-08-2014", "duration": 25, "progress": 0, "open": true},
      
      {"id": 33, "text": "Iteration 6", "start_date": "11-08-2014", "duration": 11, "progress": 0, "open": true, parent: 32},
      {"id": 34, "text": "Browsing - list of scrapbooks", "start_date": "11-08-2014", "duration": 11, "progress": 0, parent: 33},
      {"id": 35, "text": "Browsing - swap between assets and scrapbooks", "start_date": "11-08-2014", "duration": 11, "progress": 0, parent: 33},
      {"id": 36, "text": "Scrapbooks - create", "start_date": "11-08-2014", "duration": 11, "progress": 0, parent: 33},
      {"id": 37, "text": "Scrapbooks - add assets", "start_date": "11-08-2014", "duration": 11, "progress": 0, parent: 33},
      {"id": 38, "text": "Scrapbooks - edit", "start_date": "11-08-2014", "duration": 11, "progress": 0, parent: 33},
      {"id": 39, "text": "Scrapbooks - delete", "start_date": "11-08-2014", "duration": 11, "progress": 0, parent: 33},
      {"id": 40, "text": "Scrapbooks - order assets", "start_date": "11-08-2014", "duration": 11, "progress": 0, parent: 33},
      {"id": 41, "text": "Scrapbooks - sharing (basic)", "start_date": "11-08-2014", "duration": 11, "progress": 0, parent: 33},
      
      {"id": 42, "text": "Iteration 7", "start_date": "25-08-2014", "duration": 11, "progress": 0, "open": true, parent: 32},
      {"id": 43, "text": "Uploads - scanned document", "start_date": "25-08-2014", "duration": 8, "progress": 0, parent: 42},
      {"id": 44, "text": "Uploads - text", "start_date": "25-08-2014", "duration": 8, "progress": 0, parent: 42},
      {"id": 45, "text": "Testing with a range of devices", "start_date": "03-09-2014", "duration": 2, "progress": 0, parent: 42},
      {"id": 46, "text": "Testing with Stakeholders", "start_date": "03-09-2014", "duration": 2, "progress": 0, parent: 42},
      {"id": 47, "text": "v1 Comms Plan", "start_date": "03-09-2014", "duration": 0, "type":gantt.config.types.milestone, "progress": 0, parent: 42},
      {"id": 48, "text": "v2 T&Cs", "start_date": "03-09-2014", "duration": 0, "type":gantt.config.types.milestone, "progress": 0, parent: 42},
      

      {"id": 49, "text": "Release 4", "start_date": "08-09-2014", "duration": 14, "progress": 0, "open": true},
      
      {"id": 50, "text": "Iteration 8", "start_date": "08-09-2014", "duration": 14, "progress": 0, "open": true, parent: 49},
      
      {"id": 16, "text": "Uploads - tagging content", "start_date": "08-09-2014", "duration": 8, "progress": 0, parent: 50},
      

      {"id": 51, "text": "User homepage - filtering", "start_date": "08-09-2014", "duration": 8, "progress": 0, parent: 50},
      {"id": 52, "text": "Browsing - filtering", "start_date": "08-09-2014", "duration": 8, "progress": 0, parent: 50},
      {"id": 53, "text": "User homepage - searching", "start_date": "08-09-2014", "duration": 8, "progress": 0, parent: 50},
      {"id": 54, "text": "Browsing - searching", "start_date": "08-09-2014", "duration": 8, "progress": 0, parent: 50},
      {"id": 55, "text": "Testing with Stakeholders", "start_date": "17-09-2014", "duration": 2, "progress": 0, parent: 50},
      {"id": 56, "text": "v3 T&Cs", "start_date": "17-09-2014", "duration": 0, "type":gantt.config.types.milestone, "progress": 0, parent: 50},
      

      {"id": 57, "text": "Release 5", "start_date": "22-09-2014", "duration": 53, "progress": 0, "open": true},
      
      {"id": 58, "text": "Iteration 9", "start_date": "22-09-2014", "duration": 11, "progress": 0, "open": true, parent: 57},
      {"id": 59, "text": "User homepage - sending content for moderation", "start_date": "22-09-2014", "duration": 11, "progress": 0, parent: 58},
      {"id": 60, "text": "Uploads - save instead of send", "start_date": "22-09-2014", "duration": 11, "progress": 0, parent: 58},
      {"id": 61, "text": "User homepage - show moderation progress", "start_date": "22-09-2014", "duration": 11, "progress": 0, parent: 58},
      {"id": 62, "text": "User homepage - preview of uploaded content", "start_date": "22-09-2014", "duration": 11, "progress": 0, parent: 58},
      {"id": 63, "text": "Authentication - reset password", "start_date": "22-09-2014", "duration": 11, "progress": 0, parent: 58},
      {"id": 64, "text": "Authentication - manage account (user)", "start_date": "22-09-2014", "duration": 11, "progress": 0, parent: 58},
      
      {"id": 65, "text": "Iteration 10", "start_date": "17-10-2014", "duration": 14, "progress": 0, "open": true, parent: 57},
      {"id": 66, "text": "Moderation - list of outstanding content", "start_date": "17-10-2014", "duration": 14, "progress": 0, parent: 65},
      {"id": 67, "text": "Moderation - preview content", "start_date": "17-10-2014", "duration": 14, "progress": 0, parent: 65},
      {"id": 68, "text": "Moderation - accept", "start_date": "17-10-2014", "duration": 14, "progress": 0, parent: 65},
      {"id": 69, "text": "Moderation - confirm on accept", "start_date": "17-10-2014", "duration": 14, "progress": 0, parent: 65},
      {"id": 70, "text": "Moderation - reject with reason", "start_date": "17-10-2014", "duration": 14, "progress": 0, parent: 65},
      {"id": 71, "text": "Moderation - notify user", "start_date": "17-10-2014", "duration": 14, "progress": 0, parent: 65},
      {"id": 72, "text": "T&Cs final and disclaimer", "start_date": "31-10-2014", "duration": 0, "type":gantt.config.types.milestone, "progress": 0, parent: 65},
      {"id": 73, "text": "Text for About and Help pages", "start_date": "31-10-2014", "duration": 0, "type":gantt.config.types.milestone, "progress": 0, parent: 65},
      
      {"id": 74, "text": "Iteration 11", "start_date": "03-11-2014", "duration": 11, "progress": 0, "open": true, parent: 57},
      {"id": 75, "text": "Authentication - comprehensive T&Cs", "start_date": "03-11-2014", "duration": 8, "progress": 0, parent: 74},
      {"id": 76, "text": "Add CMS support?", "start_date": "03-11-2014", "duration": 8, "progress": 0, parent: 74},
      {"id": 77, "text": "Help and tutorial pages", "start_date": "03-11-2014", "duration": 8, "progress": 0, parent: 74},
      {"id": 78, "text": "About page", "start_date": "03-11-2014", "duration": 8, "progress": 0, parent: 74},
      {"id": 79, "text": "Prompt users to use the app", "start_date": "03-11-2014", "duration": 8, "progress": 0, parent: 74},
      {"id": 80, "text": "Additional content added", "start_date": "12-11-2014", "duration": 0, "type":gantt.config.types.milestone, "progress": 0, parent: 74},
      {"id": 81, "text": "Testing with Stakeholders", "start_date": "12-11-2014", "duration": 2, "progress": 0, parent: 74},
      {"id": 82, "text": "Officially name the app", "start_date": "03-11-2014", "duration": 0, "type":gantt.config.types.milestone, "progress": 0, parent: 74},
      {"id": 83, "text": "Public Soft Launch", "start_date": "14-11-2014", "duration": 0, "type":gantt.config.types.milestone, "progress": 0, parent: 74},
      

      {"id": 84, "text": "Release 6", "start_date": "17-11-2014", "duration": 36, "progress": 0, "open": true},
      
      {"id": 85, "text": "Iteration 12", "start_date": "17-11-2014", "duration": 11, "progress": 0, "open": true, parent: 84},
      {"id": 86, "text": "Authentication - Manage users (admin)", "start_date": "17-11-2014", "duration": 11, "progress": 0, parent: 85},
      {"id": 87, "text": "Moderation - block user", "start_date": "17-11-2014", "duration": 11, "progress": 0, parent: 85},
      {"id": 88, "text": "Uploads - video", "start_date": "17-11-2014", "duration": 11, "progress": 0, parent: 85},
      {"id": 89, "text": "Uploads - limit video uploads", "start_date": "17-11-2014", "duration": 11, "progress": 0, parent: 85},
      
      {"id": 90, "text": "Iteration 13", "start_date": "12-12-2014", "duration": 11, "progress": 0, "open": true, parent: 84},
      {"id": 91, "text": "Scrapbooks - sharing (advanced)", "start_date": "12-12-2014", "duration": 11, "progress": 0, parent: 90},
      {"id": 92, "text": "Browsing - content like this", "start_date": "12-12-2014", "duration": 11, "progress": 0, parent: 90},
      {"id": 93, "text": "Browsing - comments", "start_date": "12-12-2014", "duration": 11, "progress": 0, parent: 90},
      {"id": 94, "text": "Browsing - report abuse", "start_date": "12-12-2014", "duration": 11, "progress": 0, parent: 90},
      {"id": 95, "text": "Testing with Stakeholders", "start_date": "12-12-2014", "duration": 4, "progress": 0, parent: 90},
      

      {"id": 96, "text": "Release 7", "start_date": "05-01-2015", "duration": 53, "progress": 0, "open": true},
      
      {"id": 97, "text": "Iteration 14", "start_date": "05-01-2015", "duration": 11, "progress": 0, "open": true, parent: 96},
      {"id": 98, "text": "Uploads - inline editing of audio", "start_date": "05-01-2015", "duration": 11, "progress": 0, parent: 97},
      {"id": 99, "text": "Uploads - inline editing of video", "start_date": "05-01-2015", "duration": 11, "progress": 0, parent: 97},
      
      {"id": 100, "text": "Iteration 15", "start_date": "19-01-2015", "duration": 11, "progress": 0, "open": true, parent: 96},
      {"id": 101, "text": "Uploads - import image metadata", "start_date": "19-01-2015", "duration": 11, "progress": 0, parent: 100},
      {"id": 102, "text": "Version control", "start_date": "19-01-2015", "duration": 11, "progress": 0, parent: 100},
      {"id": 103, "text": "Messaging system", "start_date": "19-01-2015", "duration": 11, "progress": 0, parent: 100},
      
      {"id": 104, "text": "Iteration 16", "start_date": "02-02-2015", "duration": 11, "progress": 0, "open": true, parent: 96},
      {"id": 105, "text": "Moderation - filtering", "start_date": "02-02-2015", "duration": 11, "progress": 0, parent: 104},
      {"id": 106, "text": "Moderation - searching", "start_date": "02-02-2015", "duration": 11, "progress": 0, parent: 104},
      {"id": 107, "text": "Moderation - email when new assets to moderate", "start_date": "02-02-2015", "duration": 11, "progress": 0, parent: 104},
      {"id": 108, "text": "Moderation - trust user", "start_date": "02-02-2015", "duration": 11, "progress": 0, parent: 104},
      
      {"id": 109, "text": "Iteration 17", "start_date": "16-02-2015", "duration": 11, "progress": 0, "open": true, parent: 96},
      {"id": 110, "text": "Browsing - inline editing of metadata", "start_date": "16-02-2015", "duration": 11, "progress": 0, parent: 109},
      {"id": 111, "text": "Users in groups", "start_date": "16-02-2015", "duration": 11, "progress": 0, parent: 109},
      


      {"id": 112, "text": "Memory Box", "start_date": "01-07-2014", "duration": 171, "progress": 0, "open": true},
      {"id": 113, "text": "Speak with Scott Downie from Memory Box Network", "start_date": "01-07-2014", "duration": 1, "progress": 1, parent: 112},
      {"id": 114, "text": "Review other potential options", "start_date": "02-07-2014", "duration": 22, "progress": 0, parent: 112},
      {"id": 115, "text": "Integrate 3rd Party apps", "start_date": "28-07-2014", "duration": 144, "progress": 0, parent: 112},
      


      {"id": 116, "text": "Open Data", "start_date": "01-07-2014", "duration": 171, "progress": 0, "open": true},
      {"id": 117, "text": "Establish Open Data strategy", "start_date": "01-07-2014", "duration": 0, "type":gantt.config.types.milestone, "progress": 1, parent: 116},
      {"id": 118, "text": "Build a site to sit on top of individual CKAN instances", "start_date": "04-08-2014", "duration": 0, "type":gantt.config.types.milestone, "progress": 0, parent: 116},
      {"id": 119, "text": "Integrate with Capital Collections", "start_date": "28-07-2014", "duration": 144, "progress": 0, parent: 116},
      {"id": 120, "text": "Integrate with CKAN", "start_date": "28-07-2014", "duration": 144, "progress": 0, parent: 116},
      {"id": 121, "text": "Ongoing Open Data tasks", "start_date": "28-07-2014", "duration": 144, "progress": 0, parent: 116},
      


      {"id": 122, "text": "Civic Exchange Integrations", "start_date": "07-07-2014", "duration": 157, "progress": 0, "open": true},
      {"id": 123, "text": "Identify potential integrations", "start_date": "07-07-2014", "duration": 23, "progress": 0, parent: 122},
      {"id": 124, "text": "First integration - TBA", "start_date": "06-10-2014", "duration": 10, "progress": 0, parent: 122},
      {"id": 125, "text": "Second integration - TBA", "start_date": "01-12-2014", "duration": 10, "progress": 0, parent: 122},
      


      {"id": 126, "text": "Other Projects", "start_date": "21-06-2014", "duration": 133, "progress": 0.11, "open": true},
      {"id": 127, "text": "Code The City", "start_date": "21-06-2014", "duration": 2, "progress": 1, parent: 126},
      {"id": 128, "text": "Ten Percent News", "start_date": "23-06-2014", "duration": 74, "progress": 0.11, parent: 126},
      {"id": 129, "text": "Edinburgh Hackathon", "start_date": "01-11-2014", "duration": 0, "type":gantt.config.types.milestone, "progress": 0, parent: 126},
      


      {"id": 130, "text": "Overhead", "start_date": "01-07-2014", "duration": 153, "progress": 0, "open": true},
      {"id": 131, "text": "Meetings", "start_date": "01-07-2014", "duration": 153, "progress": 0.17, parent: 130},
      {"id": 132, "text": "Fellow Meeting", "start_date": "01-07-2014", "duration": 1, "progress": 1, parent: 130},
      {"id": 133, "text": "Fellow Meeting", "start_date": "03-08-2014", "duration": 1, "progress": 0, parent: 130},
      {"id": 134, "text": "Fellow Meeting", "start_date": "01-09-2014", "duration": 1, "progress": 0, parent: 130},
      {"id": 135, "text": "Fellow Meeting", "start_date": "01-10-2014", "duration": 1, "progress": 0, parent: 130},
      {"id": 136, "text": "Fellow Meeting", "start_date": "03-11-2014", "duration": 1, "progress": 0, parent: 130},
      {"id": 137, "text": "Fellow Meeting", "start_date": "01-12-2014", "duration": 1, "progress": 0, parent: 130},
      


      {"id": 138, "text": "Trips", "start_date": "15-07-2014", "duration": 101, "progress": 0.2667, "open": true},
      {"id": 139, "text": "Berlin - OKF", "start_date": "15-07-2014", "duration": 3, "progress": 1, parent: 138},
      {"id": 141, "text": "Manchester (TBC)", "start_date": "31-07-2014", "duration": 1, "progress": 1, parent: 138},
      {"id": 140, "text": "Glasgow (TBC)", "start_date": "03-08-2014", "duration": 1, "progress": 0, parent: 138},
      {"id": 142, "text": "Helsinki", "start_date": "24-09-2014", "duration": 3, "progress": 0, parent: 138},
      {"id": 143, "text": "Tiree Tech Wave", "start_date": "23-10-2014", "duration": 7, "progress": 0, parent: 138},
      


      {"id": 144, "text": "Holidays", "start_date": "21-07-2014", "duration": 165, "progress": 0.1667, "open": true},
      {"id": 145, "text": "Long Weekend", "start_date": "21-07-2014", "duration": 2, "progress": 1, parent: 144},
      {"id": 146, "text": "DConstruct", "start_date": "05-09-2014", "duration": 1, "progress": 0, parent: 144},
      {"id": 147, "text": "Christmas/New Year", "start_date": "24-12-2014", "duration": 9, "progress": 0, parent: 144}
    ],
    links:[
    ]};

});