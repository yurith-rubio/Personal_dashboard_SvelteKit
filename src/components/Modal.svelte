<script lang="ts">
    import close from '$lib/x.svg'
    export let data: IEmployee | undefined;
    export let visible: boolean = false;
    import Tag from './Tag.svelte';
    import { enhance } from '$app/forms';

    export function showModal() {
        visible = true;
    }

    export function hideModal() {
      document.documentElement.style.overflow = "";
        visible = false;
    }    

</script>
{#if data && visible}
<div id="ModalContainer" class:visible >
    <button id="BgModal" class:visible on:click={hideModal}></button>
    <div id="Modal">
      <div class="modal-close-heading">
        <button class="modal-close" on:click={hideModal}><img src={close} alt="close icon"/></button>
      </div>
      <div class="modal-content flex">
          <div class="modal-form flex">
            <div class="modal-title dark">Aktuelle Daten</div>
            <form method="POST" use:enhance on:submit={hideModal}>
              <label class="personalnummer">
                Personalnummer
                <input readonly name="personalnummer" type="text" bind:value={data.employeeKey}/>
              </label>
              <label>
                Vorname
                <input bind:value={data.firstName} name="vorname" type="text"/>
              </label>
              <label>
                Nachname
                <input bind:value={data.lastName} name="nachname" type="text"/>
              </label>
              <label>
                Abteilung
                <select bind:value={data.department} name="abteilung">
                  <option value="Other">Other</option>
                  <option value="HR">HR</option>
                  <option value="Management">Management</option>
                  <option value="IT">IT</option>
                <select/>
              </label>
              <label class="checkbox">
                <input type="checkbox" name="status" value="aktiv" bind:checked={data.active}/> {data.active ? "Aktiv" : "Inaktiv"}
              </label>
              <div class="div-submit-btn flex">
                <button type="submit">Speichern</button>
              </div>
            </form>
          </div>
          <div class="modal-preview flex">
            <div class="modal-title dark">Preview</div>
            <div class="modal-card flex">
              <div><img src={`${data.photo}`} alt={data.photo} class="modal-img" /></div>
              <div class="modal-card-content flex">
                <div>
                  <div class="modal-title gray">{data.firstName + " " + data.lastName}</div>
                  <div class="gray bold">{data.employeeKey.toUpperCase()}</div>
                </div>
                <div class="tag">
                  {#if data.department === "Management"}
                    <Tag text={data.department} color="blue" />
                  {:else if data.department === "HR"}
                    <Tag text={data.department} color="yellow" />
                  {:else if data.department === "IT"}
                    <Tag text={data.department} color="green" />
                  {:else if data.department === "Other"}
                    <Tag text={data.department} color="gray" />
                  {:else}
                    <td></td>
                  {/if}
                  {#if data.active === true }
                    <Tag text="Aktiv" color="green" />
                  {:else}
                    <Tag text="Inaktiv" color="gray" />
                  {/if}
                </div>
              </div>
            </div>
          </div>
      </div>
  </div>
  
</div>
{/if}


<style>
  /* MODAL */
  #ModalContainer.visible{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
  }
  #BgModal{
    width: inherit;
    height: inherit;
    background-color: #fff;
    opacity: 0.7;;
    position: relative;
    z-index: 11;
  }
  #Modal{
    min-height: 50px;
    width: 900px;
    background-color: #fff;
    position: absolute;
    z-index: 12;
    box-shadow: 0 32px 64px 1px rgba(0,0,0,0.15);
  }
  .modal-close-heading{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 72px;
    padding-right: 20px;
  }
  .modal-form, .modal-preview{
    padding: 24px;
    flex-direction: column;
    gap: 24px;
  }
  .modal-form{
    width: 360px;
  }
  .modal-preview{
    width: 600px;
  }
  .modal-card{
    background-color: #F8FAF8;
    border-radius: 12px;
    padding: 24px;
    gap: 24px;
  }
  .modal-card-content{
    flex-direction: column;
    justify-content: space-between;
  }
  .modal-title{
    font-size: 18px;
    font-weight: 800;
    font-family: 'Montserrat', sans-serif;
    line-height: 25.2px;
  }
  .modal-img{
    width: 92px;
    height: 92px;
    border-radius: 50%;
  }
  form label{
    display: flex;
    flex-direction: column;
    color: var(--gray);
    margin-bottom: 16px;
    font-weight: 600;
    letter-spacing: 0;
  }
  form input, form select{
    background-color: transparent;
    border: 1px solid var(--gray-border);
    border-radius: 5px;
    color: var(--gray);
    font-size: 14px;
  }
  label.checkbox{
    align-items: baseline;
    flex-direction: row;
  }
  label.personalnummer input{
    background-color: #f4f4f4;
  }
  button.modal-close{
    background-color: white;
    border: none;
    cursor: pointer;
  }
  button[type=submit]{
    padding: 4px 15px;
    text-transform: uppercase;
    font-weight: 600;
    background-color: #444;
    box-shadow: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .div-submit-btn{
    justify-content: flex-end;
  }

  .flex {
    display: flex;
  }
  .bold{
    font-weight: 600;
  }
  .dark{
    color: var(--dark-text);
  }
  .gray{
    color: var(--gray);
  }
</style>