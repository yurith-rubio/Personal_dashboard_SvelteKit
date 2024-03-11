<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    import edit from '$lib/edit.svg'

    function openModal() {
        dispatch('openModal');
    }

</script>



<button on:click={openModal} class="edit"><img class="edit-icon" src={edit} alt="edit icon"/></button>

<style>
    .edit{
        background-color: #CCEBD7;
        padding: 4px 4px 0px;
        border-radius: 3px;
        margin-left: 4px;
    }
    .edit-icon{
        height: 16px;
        width: 16px;
    }
</style>