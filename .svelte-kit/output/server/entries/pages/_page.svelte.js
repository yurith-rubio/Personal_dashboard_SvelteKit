import { c as create_ssr_component, d as createEventDispatcher, f as add_attribute, e as escape, v as validate_component, h as each } from "../../chunks/ssr.js";
import { e as employees } from "../../chunks/employees.js";
import "devalue";
import "../../chunks/client.js";
const edit = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Icons/edit-3'%3e%3cg%20id='Vector'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M15.7929%203.35355C16.3783%202.76818%2017.1722%202.43933%2018%202.43933C18.4099%202.43933%2018.8158%202.52007%2019.1945%202.67693C19.5732%202.83379%2019.9173%203.0637%2020.2071%203.35355C20.497%203.64339%2020.7269%203.98748%2020.8837%204.36617C21.0406%204.74487%2021.1213%205.15075%2021.1213%205.56065C21.1213%205.97055%2021.0406%206.37643%2020.8837%206.75513C20.7269%207.13383%2020.497%207.47792%2020.2071%207.76776L7.70713%2020.2678C7.57897%2020.3959%207.41839%2020.4868%207.24256%2020.5308L3.24256%2021.5308C2.90178%2021.616%202.54129%2021.5161%202.29291%2021.2678C2.04453%2021.0194%201.94468%2020.6589%202.02988%2020.3181L3.02988%2016.3181C3.07384%2016.1423%203.16476%2015.9817%203.29291%2015.8535L15.7929%203.35355ZM18%204.43933C17.7026%204.43933%2017.4174%204.55747%2017.2071%204.76776L4.90299%2017.0719L4.37439%2019.1863L6.48877%2018.6577L18.7929%206.35354C18.897%206.24942%2018.9796%206.12581%2019.036%205.98976C19.0923%205.85372%2019.1213%205.70791%2019.1213%205.56065C19.1213%205.4134%2019.0923%205.26759%2019.036%205.13154C18.9796%204.9955%2018.897%204.87188%2018.7929%204.76776C18.6888%204.66363%2018.5652%204.58104%2018.4291%204.52469C18.2931%204.46834%2018.1473%204.43933%2018%204.43933Z'%20fill='%2318794E'/%3e%3cpath%20d='M11%2020.5606C11%2020.0084%2011.4477%2019.5606%2012%2019.5606H21C21.5523%2019.5606%2022%2020.0084%2022%2020.5606C22%2021.1129%2021.5523%2021.5606%2021%2021.5606H12C11.4477%2021.5606%2011%2021.1129%2011%2020.5606Z'%20fill='%2318794E'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
const css$3 = {
  code: ".edit.svelte-trp30g{background-color:#CCEBD7;padding:4px 4px 0px;border-radius:3px;margin-left:4px}.edit-icon.svelte-trp30g{height:16px;width:16px}",
  map: null
};
const EditButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  $$result.css.add(css$3);
  return `<button class="edit svelte-trp30g" data-svelte-h="svelte-1wfe72r"><img class="edit-icon svelte-trp30g"${add_attribute("src", edit, 0)} alt="edit icon"></button>`;
});
const close = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Icons/x'%3e%3cpath%20id='Vector'%20d='M5.29289%205.29289C5.68342%204.90237%206.31658%204.90237%206.70711%205.29289L12%2010.5858L17.2929%205.29289C17.6834%204.90237%2018.3166%204.90237%2018.7071%205.29289C19.0976%205.68342%2019.0976%206.31658%2018.7071%206.70711L13.4142%2012L18.7071%2017.2929C19.0976%2017.6834%2019.0976%2018.3166%2018.7071%2018.7071C18.3166%2019.0976%2017.6834%2019.0976%2017.2929%2018.7071L12%2013.4142L6.70711%2018.7071C6.31658%2019.0976%205.68342%2019.0976%205.29289%2018.7071C4.90237%2018.3166%204.90237%2017.6834%205.29289%2017.2929L10.5858%2012L5.29289%206.70711C4.90237%206.31658%204.90237%205.68342%205.29289%205.29289Z'%20fill='%236B716A'/%3e%3c/g%3e%3c/svg%3e";
const css$2 = {
  code: ".gray.svelte-1htx2sv{color:var(--gray);background-color:var(--light-gray)}.yellow.svelte-1htx2sv{color:var(--yellow);background-color:var(--light-yellow)}.blue.svelte-1htx2sv{color:var(--blue);background-color:var(--light-blue)}.green.svelte-1htx2sv{color:var(--green);background-color:var(--light-green)}",
  map: null
};
const Tag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "gray" } = $$props;
  let { text = "" } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$2);
  return `<span class="${escape(text, true) + " " + escape(color, true) + " svelte-1htx2sv"}">${escape(text)}</span>`;
});
const css$1 = {
  code: "#ModalContainer.visible.svelte-1r5d2u1.svelte-1r5d2u1{display:flex;justify-content:center;align-items:center;width:100vw;height:100vh;position:fixed;z-index:10;top:0;left:0}#BgModal.svelte-1r5d2u1.svelte-1r5d2u1{width:inherit;height:inherit;background-color:#fff;opacity:0.7;;;position:relative;z-index:11}#Modal.svelte-1r5d2u1.svelte-1r5d2u1{min-height:50px;width:900px;background-color:#fff;position:absolute;z-index:12;box-shadow:0 32px 64px 1px rgba(0,0,0,0.15)}.modal-close-heading.svelte-1r5d2u1.svelte-1r5d2u1{display:flex;justify-content:flex-end;align-items:center;height:72px;padding-right:20px}.modal-form.svelte-1r5d2u1.svelte-1r5d2u1,.modal-preview.svelte-1r5d2u1.svelte-1r5d2u1{padding:24px;flex-direction:column;gap:24px}.modal-form.svelte-1r5d2u1.svelte-1r5d2u1{width:360px}.modal-preview.svelte-1r5d2u1.svelte-1r5d2u1{width:600px}.modal-card.svelte-1r5d2u1.svelte-1r5d2u1{background-color:#F8FAF8;border-radius:12px;padding:24px;gap:24px}.modal-card-content.svelte-1r5d2u1.svelte-1r5d2u1{flex-direction:column;justify-content:space-between}.modal-title.svelte-1r5d2u1.svelte-1r5d2u1{font-size:18px;font-weight:800;font-family:'Montserrat', sans-serif;line-height:25.2px}.modal-img.svelte-1r5d2u1.svelte-1r5d2u1{width:92px;height:92px;border-radius:50%}form.svelte-1r5d2u1 label.svelte-1r5d2u1{display:flex;flex-direction:column;color:var(--gray);margin-bottom:16px;font-weight:600;letter-spacing:0}form.svelte-1r5d2u1 input.svelte-1r5d2u1,form.svelte-1r5d2u1 select.svelte-1r5d2u1{background-color:transparent;border:1px solid var(--gray-border);border-radius:5px;color:var(--gray);font-size:14px}label.checkbox.svelte-1r5d2u1.svelte-1r5d2u1{align-items:baseline;flex-direction:row}label.personalnummer.svelte-1r5d2u1 input.svelte-1r5d2u1{background-color:#f4f4f4}button.modal-close.svelte-1r5d2u1.svelte-1r5d2u1{background-color:white;border:none;cursor:pointer}button[type=submit].svelte-1r5d2u1.svelte-1r5d2u1{padding:4px 15px;text-transform:uppercase;font-weight:600;background-color:#444;box-shadow:none;border:none;border-radius:5px;cursor:pointer}.div-submit-btn.svelte-1r5d2u1.svelte-1r5d2u1{justify-content:flex-end}.flex.svelte-1r5d2u1.svelte-1r5d2u1{display:flex}.bold.svelte-1r5d2u1.svelte-1r5d2u1{font-weight:600}.dark.svelte-1r5d2u1.svelte-1r5d2u1{color:var(--dark-text)}.gray.svelte-1r5d2u1.svelte-1r5d2u1{color:var(--gray)}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { visible = false } = $$props;
  function showModal() {
    visible = true;
  }
  function hideModal() {
    document.documentElement.style.overflow = "";
    visible = false;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0)
    $$bindings.showModal(showModal);
  if ($$props.hideModal === void 0 && $$bindings.hideModal && hideModal !== void 0)
    $$bindings.hideModal(hideModal);
  $$result.css.add(css$1);
  return `${data && visible ? `<div id="ModalContainer" class="${["svelte-1r5d2u1", visible ? "visible" : ""].join(" ").trim()}"><button id="BgModal" class="${["svelte-1r5d2u1", visible ? "visible" : ""].join(" ").trim()}"></button> <div id="Modal" class="svelte-1r5d2u1"><div class="modal-close-heading svelte-1r5d2u1"><button class="modal-close svelte-1r5d2u1" data-svelte-h="svelte-wket9w"><img${add_attribute("src", close, 0)} alt="close icon"></button></div> <div class="modal-content flex svelte-1r5d2u1"><div class="modal-form flex svelte-1r5d2u1"><div class="modal-title dark svelte-1r5d2u1" data-svelte-h="svelte-1hkd7me">Aktuelle Daten</div> <form method="POST" class="svelte-1r5d2u1"><label class="personalnummer svelte-1r5d2u1">Personalnummer
                <input readonly name="personalnummer" type="text" class="svelte-1r5d2u1"${add_attribute("value", data.employeeKey, 0)}></label> <label class="svelte-1r5d2u1">Vorname
                <input name="vorname" type="text" class="svelte-1r5d2u1"${add_attribute("value", data.firstName, 0)}></label> <label class="svelte-1r5d2u1">Nachname
                <input name="nachname" type="text" class="svelte-1r5d2u1"${add_attribute("value", data.lastName, 0)}></label> <label class="svelte-1r5d2u1">Abteilung
                <select name="abteilung" class="svelte-1r5d2u1"><option value="Other" data-svelte-h="svelte-1tac7i">Other</option><option value="HR" data-svelte-h="svelte-ak5adq">HR</option><option value="Management" data-svelte-h="svelte-c7q79e">Management</option><option value="IT" data-svelte-h="svelte-5s08lm">IT</option><select class="svelte-1r5d2u1"></select></select></label> <label class="checkbox svelte-1r5d2u1"><input type="checkbox" name="status" value="aktiv" class="svelte-1r5d2u1"${add_attribute("checked", data.active, 1)}> ${escape(data.active ? "Aktiv" : "Inaktiv")}</label> <div class="div-submit-btn flex svelte-1r5d2u1" data-svelte-h="svelte-10rlply"><button type="submit" class="svelte-1r5d2u1">Speichern</button></div></form></div> <div class="modal-preview flex svelte-1r5d2u1"><div class="modal-title dark svelte-1r5d2u1" data-svelte-h="svelte-clc3vj">Preview</div> <div class="modal-card flex svelte-1r5d2u1"><div><img${add_attribute("src", `${data.photo}`, 0)}${add_attribute("alt", data.photo, 0)} class="modal-img svelte-1r5d2u1"></div> <div class="modal-card-content flex svelte-1r5d2u1"><div><div class="modal-title gray svelte-1r5d2u1">${escape(data.firstName + " " + data.lastName)}</div> <div class="gray bold svelte-1r5d2u1">${escape(data.employeeKey.toUpperCase())}</div></div> <div class="tag">${data.department === "Management" ? `${validate_component(Tag, "Tag").$$render($$result, { text: data.department, color: "blue" }, {}, {})}` : `${data.department === "HR" ? `${validate_component(Tag, "Tag").$$render($$result, { text: data.department, color: "yellow" }, {}, {})}` : `${data.department === "IT" ? `${validate_component(Tag, "Tag").$$render($$result, { text: data.department, color: "green" }, {}, {})}` : `${data.department === "Other" ? `${validate_component(Tag, "Tag").$$render($$result, { text: data.department, color: "gray" }, {}, {})}` : `<td></td>`}`}`}`} ${data.active === true ? `${validate_component(Tag, "Tag").$$render($$result, { text: "Aktiv", color: "green" }, {}, {})}` : `${validate_component(Tag, "Tag").$$render($$result, { text: "Inaktiv", color: "gray" }, {}, {})}`}</div></div></div></div></div></div></div>` : ``}`;
});
const css = {
  code: "main.svelte-bwosqa.svelte-bwosqa{padding:4.8rem;height:100vh}#TableContainer.svelte-bwosqa.svelte-bwosqa{overflow:hidden;white-space:nowrap;background-color:var(--light-bg);border-radius:15px;box-shadow:0 8px 16px 0 rgba(0,0,0,0.1)}#TableContainer.svelte-bwosqa tr.svelte-bwosqa{color:var(--dark-text);text-align:left}#TableContainer.svelte-bwosqa tr th.svelte-bwosqa{border-bottom:1px solid var(--gray-border)}#TableContainer.svelte-bwosqa tr:not(:last-child) td.svelte-bwosqa{border-bottom:1px solid var(--lightgray-border)}#TableContainer.svelte-bwosqa th.svelte-bwosqa{font-weight:400}#TableContainer.svelte-bwosqa td.svelte-bwosqa{color:var(--gray-text)}#TableContainer.svelte-bwosqa th.svelte-bwosqa,#TableContainer.svelte-bwosqa td.svelte-bwosqa{padding:0.4rem 2rem}#TableContainer.svelte-bwosqa th.svelte-bwosqa:nth-child(1),#TableContainer.svelte-bwosqa td.svelte-bwosqa:nth-child(1){padding-left:16px}.avatar-img.svelte-bwosqa.svelte-bwosqa{border-radius:50%;width:36px;height:36px}.employee-row.svelte-bwosqa.svelte-bwosqa:hover{background-color:var(--row-hover)}.edit-button.svelte-bwosqa.svelte-bwosqa{opacity:0}.employee-row.svelte-bwosqa:hover .edit-button.svelte-bwosqa{opacity:1 !important}td.key.svelte-bwosqa.svelte-bwosqa{font-weight:600;font-size:12px}.comment.svelte-bwosqa.svelte-bwosqa::first-letter{text-transform:capitalize}tfoot.svelte-bwosqa td.svelte-bwosqa{font-size:10px;font-weight:600;line-height:14px;letter-spacing:1px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let OpenedModal;
  let selectedEmployee = void 0;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<main class="svelte-bwosqa"><table id="TableContainer" class="svelte-bwosqa"><thead data-svelte-h="svelte-74m7n7"><tr class="svelte-bwosqa"><th class="svelte-bwosqa">Personalnummer</th> <th class="svelte-bwosqa">Foto</th> <th class="svelte-bwosqa">Name</th> <th class="svelte-bwosqa">Abteilung</th> <th class="svelte-bwosqa">Status</th> <th class="svelte-bwosqa">Erstellt</th> <th class="svelte-bwosqa">Kommentar</th></tr></thead> <tbody>${each(data.employees, (employee) => {
      return `<tr class="employee-row svelte-bwosqa"><td class="key svelte-bwosqa">${escape(employee.employeeKey.toUpperCase())}</td> <td class="svelte-bwosqa"><img class="avatar-img svelte-bwosqa"${add_attribute("src", `${employee.photo}`, 0)}${add_attribute("alt", `${employee.firstName} ${employee.lastName} photo`, 0)} width="100" height="100"></td> <td class="svelte-bwosqa">${escape(employee.firstName)} ${escape(employee.lastName)} <span class="edit-button svelte-bwosqa">${validate_component(EditButton, "EditButton").$$render($$result, {}, {}, {})}</span></td> ${employee.department === "Management" ? `<td class="tag svelte-bwosqa">${validate_component(Tag, "Tag").$$render($$result, { text: employee.department, color: "blue" }, {}, {})}</td>` : `${employee.department === "HR" ? `<td class="tag svelte-bwosqa">${validate_component(Tag, "Tag").$$render(
        $$result,
        {
          text: employee.department,
          color: "yellow"
        },
        {},
        {}
      )}</td>` : `${employee.department === "IT" ? `<td class="tag svelte-bwosqa">${validate_component(Tag, "Tag").$$render(
        $$result,
        {
          text: employee.department,
          color: "green"
        },
        {},
        {}
      )}</td>` : `${employee.department === "Other" ? `<td class="tag svelte-bwosqa">${validate_component(Tag, "Tag").$$render($$result, { text: employee.department, color: "gray" }, {}, {})}</td>` : `<td class="svelte-bwosqa"></td>`}`}`}`} ${employee.active === true ? `<td class="tag svelte-bwosqa">${validate_component(Tag, "Tag").$$render($$result, { text: "Aktiv", color: "green" }, {}, {})}</td>` : `<td class="tag svelte-bwosqa">${validate_component(Tag, "Tag").$$render($$result, { text: "Inaktiv", color: "gray" }, {}, {})}</td>`} <td class="svelte-bwosqa">${escape(new Date(employee.created).toLocaleDateString("de"))}</td> ${employee.comment ? `<td class="comment svelte-bwosqa">${escape(employee.comment)}</td>` : `<td class="svelte-bwosqa"></td>`} </tr>`;
    })}</tbody> <tfoot class="svelte-bwosqa"><tr class="svelte-bwosqa"><td class="svelte-bwosqa">${escape(employees.length)} Einträge</td></tr></tfoot></table></main> ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        data: selectedEmployee,
        this: OpenedModal
      },
      {
        this: ($$value) => {
          OpenedModal = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
