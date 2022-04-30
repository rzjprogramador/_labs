<script lang="ts">
    export let valor: string
</script>

<div class="tela">
    <span>{valor}</span>
</div>

<style>
    .tela {
        display: flex;
        flex: 1;
        justify-content: flex-end;
        align-items: center;
        padding: 0px 5px;
        overflow: hidden;
        font-size: 100%;
        margin: 2px 1px;
        background-color: var(--terciary);
        border-top-right-radius: 5px;
        border-top-left-radius: 5px ;
    }
</style>