<template>
  <div
      draggable="true"
      @drag="todoDrag"
      @dragleave="todoDragLeave"
      @dragover.prevent="todoDragOver"
      @drop="todoDrop"
      class="todos__content-block"
      :class="dragAndDropClasses"
  >
      <p>{{todo}}</p>
      <div class="editor__buttons">
        <button
            class="editor__buttons-edit"
            @click="editTodo(index)"
        >
          <img
              src="../assets/icons/edit-interface.svg"
              alt="edit interface icon"
          >
        </button>
        <button
            @click="deleteTodo(index)"
            class="editor__buttons-delete"
        >
          <img
              src="../assets/icons/delete-interface.svg"
              alt="delete interface icon"
          >
        </button>
      </div>
  </div>
</template>

<script>
export default {
  name: "TodosListInterface",
  props:{
    todo:{
      type:String,
      required:true
    },
    index:{
      type:Number,
      required:true
    }
  },
  emits:['delete-todo','edit-todo','dragged-todo','dropped-todo'],
  data() {
    return {
      dragEnterClassActivate:false,
      draggedElementActive:false
    }
  },
  computed:{
    dragAndDropClasses(){
      return {
          'todos__content-drag-enter' : this.dragEnterClassActivate,
      }
    }
  },
  methods:{
    deleteTodo(index){
      this.$emit('delete-todo',index)
    },
    editTodo(index){
      this.$emit('edit-todo',index)
    },
    todoDrag(){
      this.$emit('dragged-todo',this.index)
    },
    todoDragOver(){
      this.dragEnterClassActivate = true
    },
    todoDragLeave(){
      this.dragEnterClassActivate = false
    },
    todoDrop(){
      this.dragEnterClassActivate = false
      this.$emit('dropped-todo',this.index)
    }
  }
}
</script>

<style lang="scss" scoped>
.todos__content{
  &-block{
    text-align: start;
    padding: 8px;
    border-bottom: 1px solid #292930;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-drag-enter{
    background-color: rgba(255, 99, 99,0.6);
  }

  .editor__buttons{
    display: flex;
    gap: 16px;
  }
}
</style>