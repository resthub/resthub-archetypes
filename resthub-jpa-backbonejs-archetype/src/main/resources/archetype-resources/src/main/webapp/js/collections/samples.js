define(['backbone', 'backbone-paginator', 'models/sample'], function (Backbone, BackbonePaginator, Sample) {

    var SamplesCollection = Backbone.Paginator.requestPager.extend({

        // Reference to this collection's model.
        model:Sample,

        paginator_core:{
            url:'api/sample',

            // the type of the request (GET by default)
            type:'GET',

            // the type of reply (jsonp by default)
            dataType:'json'
        },

        paginator_ui:{
            currentPage:'all'
        },

        server_api:{
            'page':function () {
                return this.currentPage;
            }
        },

        parse:function (response) {
            var samples = response.content;
            this.totalPages = response.totalPages;
            this.totalRecords = response.totalElements;
            this.lastPage = this.totalPages;
            return samples;
        }

    });
    return new SamplesCollection;
});
