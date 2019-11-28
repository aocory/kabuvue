<template>
<div v-on:click="times += 1">

<iframe 
v-bind:style="{ width: '100%', height: height + 'px' }"

:src="url"
frameborder="0" 
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen>
</iframe>
</div>
</template>
<script>
export default {
props:['url'],
data(){
    return{
        height: null,
    }
},
mounted() {
    if(window.parent.screen.width>=960){
    return this.height=480
    }else{
    return this.width1=Math.ceil(window.parent.screen.width*0.6)
    }
}
}
</script>