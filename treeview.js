function treeView () {

  var data = {
    "children": [
    {
      "children": [
      {
        "children": [],
        "name": "Here is a child8",
        "id": "child8",
        "pageURIHash": "3988665684",
        "parentId": null
      }
      ],
      "name": "Here is child1",
      "id": "child1",
      "pageURIHash": "3988665684",
      "parentId": null
    },
    {
      "children": [
      {
        "children": [],
        "name": "Here is child3",
        "id": "child3",
        "pageURIHash": "3988665684",
        "parentId": null
      },
      {
        "children": [],
        "name": "Here is child4",
        "id": "child4",
        "pageURIHash": "3988665684",
        "parentId": null
      },
      {
        "children": [],
        "name": "Here is a child5",
        "id": "child5",
        "pageURIHash": "3988665684",
        "parentId": null
      },
      {
        "children": [
        {
          "children": [
          {
            "name": [],
            "content": "Here is a child9",
            "id": "child9",
            "pageURIHash": "3988665684",
            "parentId": null
          },
          {
            "name": [],
            "content": "Here is a child10",
            "id": "child10",
            "pageURIHash": "3988665684",
            "parentId": null
          }
          ],
          "name": "Here is a child7",
          "id": "child7",
          "pageURIHash": "3988665684",
          "parentId": null
        }
        ],
        "name": "Here is a child6",
        "id": "child6",
        "pageURIHash": "3988665684",
        "parentId": null
      }
      ],
      "name": "Here is child2",
      "id": "child2",
      "pageURIHash": "3988665684",
      "parentId": null
    }
    ],
    "name": "Here is a parent comment",
    "id": "parent",
    "pageURIHash": "3988665684",
    "parentId": null
  }

// define the item component
Vue.component('item', {
  template: '#item-template',
  props: {
    model: Object
  },
  data: function () {
    return {
      open: false
    }
  },
  computed: {
    isFolder: function () {
      return true;
    }
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.open = !this.open
      }
    },
    reply: function () {
      
      //  Vue.set(this.model, 'children', [])
      this.addChild()
      this.open = true
    },
    setComment: function() {
    	//ajax code to modify the entire comment tree
      //get the parentId
      //generate a new id
      //get the comment
      //send ajax
  //    alert(this.model.id);	//parentId
      alert(this.model.rootCommentId);//root comment id
      
    },
    addChild: function () {
      
    	if (!(this.model.children &&
        this.model.children.length)) {
       Vue.set(this.model, 'children', [])
     this.model.children.push({
     });
     return;
   } 
   
   this.model.children.splice(0, 0, '');
   
 }
}
})

// boot up the demo
var demo = new Vue({
  el: '#demo',
  data: {
    treeData: data
  }
})

}