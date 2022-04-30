<script>
    import Linha from "../components/Linha.svelte"
    import Botao from "../components/Botao.svelte"
    import Tela from "../components/Tela.svelte"
</script>

<div class="calculadora">
    <Tela valor="123" />
    <!-- valor="111111111122222222233333334444555555666666" -->
    
    <Linha>
        <Botao texto="AC" triplo destaque />
        <Botao texto="/" operacao />
    </Linha>

    <Linha>
        <Botao texto="7" />
        <Botao texto="8" />
        <Botao texto="9" />
        <Botao texto="*" operacao />
    </Linha>

    <Linha>
        <Botao texto="4" />
        <Botao texto="5" />
        <Botao texto="6" />
        <Botao texto="+" operacao />
    </Linha>

    <Linha>
        <Botao texto="1" />
        <Botao texto="2" />
        <Botao texto="3" />
        <Botao texto="-" operacao />
    </Linha>

    <Linha>
        <Botao texto="0" duplo />
        <Botao texto="," />
        <Botao texto="=" destaque />
    </Linha>

</div>

<style>
    .calculadora {
        background-color: var(--color-background);
        height: 70%;
        width: 70%;
        padding: 10px;
        border-radius: 10px;

        display: flex;
        flex-direction: column;
    }
</style>