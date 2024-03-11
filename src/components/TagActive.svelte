<script lang="ts">
    export let data: IEmployee;
</script>

<td class="tag"><span class={data.active ? "aktiv" : "inaktiv"}>{data.active ? "Aktiv" : "Inaktiv"}</span></td>
