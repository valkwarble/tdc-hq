Template.contextExample.rendered= function(){
	console.log('Redenred Context Example:', this.data);	
};
Template.contextExample.helpers({
	logContext: function(){
		console.log('Context Log Helper',this);
	}
});