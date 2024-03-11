<script lang="ts">
    import { employees } from "$lib/employees";
    import EditButton from '../components/EditButton.svelte';
    import Modal from '../components/Modal.svelte';
  import TagActive from "../components/TagActive.svelte";
    import TagDepartment from "../components/TagDepartment.svelte";

    let OpenedModal : Modal;
  
    let selectedEmployee: IEmployee | undefined = undefined;
  
    function handleOpenModal(employee: IEmployee) {
      document.documentElement.style.overflow = "hidden";
  
      selectedEmployee = {...employee};
      OpenedModal.showModal();
    }
  
  </script>
  <main>
    <table id="TableContainer">
      <thead>
        <tr>
          <th>Personalnummer</th>
          <th>Foto</th>
          <th>Name</th>
          <th>Abteilung</th>
          <th>Status</th>
          <th>Erstellt</th>
          <th>Kommentar</th>
        </tr>
      </thead>
      <tbody>
        {#each employees as employee}
          <tr class="employee-row">
            <td class="key">{employee.employeeKey.toUpperCase()}</td>
            <td><img class="avatar-img" src={`${employee.photo}`} alt={`${employee.firstName} ${employee.lastName} photo`} width="100" height="100" /></td>
            <td>{employee.firstName} {employee.lastName} 
              <span class="edit-button"><EditButton on:openModal={() => handleOpenModal(employee)} /></span>
            </td>
            {#if employee.department === "Management"}
              <td class="tag"><TagDepartment text={employee.department} color="blue" /></td>
            {:else if employee.department === "HR"}
              <td class="tag"><TagDepartment text={employee.department} color="yellow" /></td>
            {:else if employee.department === "IT"}
              <td class="tag"><TagDepartment text={employee.department} color="green" /></td>
            {:else if employee.department === "Other"}
              <td class="tag"><TagDepartment text={employee.department} color="gray" /></td>
            {:else}
              <td></td>
            {/if}
            {#if employee.active === true }
              <td class="tag"><TagDepartment text="Aktiv" color="green" /></td>
            {:else}
              <td class="tag"><TagDepartment text="Inaktiv" color="gray" /></td>
            {/if}
            <td>{new Date(employee.created).toLocaleDateString("de")}</td>
            {#if employee.comment}
              <td class="comment">{employee.comment}</td>
            {:else}
              <td></td>
            {/if}
          </tr>
        {/each}
      </tbody>
      <tfoot>
        <tr>
          <td>{employees.length} Einträge</td>
        </tr>
      </tfoot>
    </table>
  </main>
  
  <Modal data={selectedEmployee} bind:this={OpenedModal} />


  <style>
  main{
    padding: 4.8rem;
    height: 100vh;
  }

  /* TABLE */
  #TableContainer{
    overflow: hidden;
    white-space: nowrap;
    background-color: var(--light-bg);
    border-radius: 15px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.1);
  }
  #TableContainer tr {
    color: var(--dark-text);
    text-align: left;
  }
  #TableContainer tr th{
    border-bottom: 1px solid var(--gray-border);
  }
  #TableContainer tr:not(:last-child) td          {
    border-bottom: 1px solid var(--lightgray-border);
  }
  #TableContainer th{
    font-weight: 400;
  }
  #TableContainer td {
    color: var(--gray-text);
  }
  #TableContainer th, #TableContainer td {
    padding: 0.4rem 2rem;
  }
  #TableContainer th:nth-child(1), #TableContainer td:nth-child(1) {
    padding-left: 16px;
  }
  /* AVATAR IMGS */
  .avatar-img{
    border-radius: 50%;
    width: 36px;
    height: 36px;
  }
  /* ROW SELECTION */
  .employee-row:hover{
    background-color: var(--row-hover);  
  }
  .edit-button{
    opacity: 0;
  }
  .employee-row:hover .edit-button{
    opacity: 1 !important;
  }
  /* ROWS */
  td.key{
    font-weight: 600;
    font-size: 12px;
  }
  .comment::first-letter {
    text-transform:capitalize;
  }
  span.aktiv{
    background-color: #E1FAEA;
    color: #018030;
  }
  span.other, span.inaktiv{
    background-color: #E6E9E6;
    color: #6B716A;
  }
  
  tfoot td{
    font-size: 10px;
    font-weight: 600;
    line-height: 14px;
    letter-spacing: 1px;
  }
  @keyframes go-up {
  
    0% {
      transform: translateY(10%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  </style>


    