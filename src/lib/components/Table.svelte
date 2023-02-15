<script lang="ts">
	import type { TableColumn } from "./TableColumn";

  export let columns: TableColumn[];
  export let rows: any[];
</script>

<div class="xdd">
  <!-- <div class="table-container" role="table" aria-label="Columns">
    <div class="flex-table header" role="rowgroup">
      {#each columns as col}
        <div class="flex-row" role="columnheader">{col.name}</div>
      {/each}
    </div>
    {#each rows as row, i}
      <div class="flex-table row" role="rowgroup">
        {#each columns as col}
          <div class="flex-row" role="cell">{row[col.prop]}</div>
        {/each}
      </div>
    {/each}
  </div> -->

  <div class="tbl-header">
    <table cellpadding="0" cellspacing="0">
      <thead>
        <tr>
          {#each columns as col}
            <th>{col.name}</th>
          {/each}
        </tr>
      </thead>
    </table>
  </div>
  <div class="tbl-content">
    <table cellpadding="0" cellspacing="0">
      <tbody>
        {#each rows as row, i}
          <tr>
            {#each columns as col}
            <td>{row[col.prop]}</td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>

<style>
.xdd {
  background-color: black;
}
table{
  width:100%;
  table-layout: fixed;
}
.tbl-header{
  background-color: rgba(255,255,255,0.3);
 }
.tbl-content{
  height:300px;
  overflow-x:auto;
  margin-top: 0px;
  border: 1px solid rgba(255,255,255,0.3);
}
th{
  padding: 20px 15px;
  text-align: left;
  font-weight: 500;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
}
td{
  padding: 15px;
  text-align: left;
  vertical-align:middle;
  font-weight: 300;
  font-size: 12px;
  color: #fff;
  border-bottom: solid 1px rgba(255,255,255,0.1);
}


  div {
    box-sizing: border-box;
  }
  .table-container {
    display: block;
    margin: 2em auto;
    width: 90%;
    max-width: 600px;
  }
  .flex-table {
    display: flex;
    flex-flow: row wrap;
    border-left: solid 1px #d9d9d9;
    transition: 0.5s;
  }
  .flex-table:first-of-type {
    border-top: solid 1px #1565C0;
    border-left: solid 1px #1565C0;
  }
  .flex-table:first-of-type .flex-row {
    background: #1976D2;
    color: white;
    border-color: #1565C0;
  }
  .flex-table.row:nth-child(odd) .flex-row {
    background: #f4f2f1;
  }
  .flex-table:hover {
    background: #F5F5F5;
    transition: 500ms;
  }
  .flex-row {
    flex-grow: 1;
    text-align: center;
    padding: 0.5em 0.5em;
    border-right: solid 1px #d9d9d9;
    border-bottom: solid 1px #d9d9d9;
  }
  .rowspan {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: center;
  }
  .column {
    display: flex;
    flex-flow: column wrap;
    width: 75%;
    padding: 0;
  }
  .column.flex-row {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    padding: 0;
    border: 0;
    border-bottom: solid 1px #d9d9d9;
  }
  .column.flex-row:hover {
    background: #F5F5F5;
    transition: 500ms;
  }

</style>
