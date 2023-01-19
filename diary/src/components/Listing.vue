<template>
    <div>
        <div class="row">
            <div class="col-3" style="width: 5rem; font-size: 12px;">
                    <li class="list-group-item">{{ list.jam }}</li>
                </div>
                
            <div class="col-3" style="width: 9rem; font-size: 12px;">
                <li class="list-group-item">{{ list.nama }}</li>
            </div>
            <div class="col-2" style="width: 5rem; font-size: 12px;">
                <li class="list-group-item">Rp. {{  list.pengeluaraan }}</li>

            </div>
            <hr />  
        </div>
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