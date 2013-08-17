require.config({
	paths:         {
		jQuery:      '/js/libs/jquery-1.10.2.min',
		Underscore:  '/js/libs/underscore',
		Backbone:    '/js/libs/backbone',
		text:        '/js/libs/text',
		templates:   '../templates'
	},

	shim:           {
		'Backbone':   ['Underscore','jQuery'],
		'SocialNet':  ['Backbone']
	}
});

require(['SocialNet'], function(SocialNet){
	SocialNet.initialize();
});

