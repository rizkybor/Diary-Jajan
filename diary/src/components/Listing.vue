<template>
    <div>
        <div class="row">
            <div class="col-3">
                <li class="list-group-item">{{ list.jam }}</li>
            </div>
            <div class="col-3">
                <li class="list-group-item">{{ list.nama }}</li>

            </div>
            <div class="col-2">
                <li class="list-group-item">{{  list.pengeluaran }}</li>

            </div>  
        </div>
        <ul class="list-group list-group-flush">
            </ul>
    </div>
</template>

<script>
export default {
    name: 'DiaryJajanListing',
    props: ['list'],
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>