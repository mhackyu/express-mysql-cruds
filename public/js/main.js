$(document).ready(function () {

  getListOfItems();

  // update modal
  $('#modalUpdate').on('shown.bs.modal', function(e) {
    var id = $(e.relatedTarget).data('id');
    var modal = $(this);
    $.ajax({
      type: "get",
      url: "/api/items/" + id,
      success: function (response) {
        var data = response.data[0];
        modal.find('#itemId').val(id);
        modal.find('#itemName').val(data.name);
        modal.find('#itemQuantity').val(data.qty);
        modal.find('#itemAmount').val(data.amount);
        return response;
      }
    });
  });

  // delete modal
  $('#modalRemove').on('shown.bs.modal', function(e) {
    var id = $(e.relatedTarget).data('id');
    var modal = $(this);
    modal.find('#itemId').val(id);
  });

  $('#btnDelete').click(function (e) { 
    e.preventDefault();
    var id = $('#modalRemove').find('#itemId').val();
    $.ajax({
      type: "delete",
      url: "/api/items/" + id,
      success: function (response) {
        $('#modalRemove').modal('hide');
        location.reload();
      }
    });
  });

  // add new item
  $('#newForm').submit(function (e) { 
    e.preventDefault();
    var name = $(this).find('#itemName').val();
    var qty = $(this).find('#itemQuantity').val();
    var amount = $(this).find('#itemAmount').val();
    
    $.ajax({
      type: "post",
      url: "/api/items/",
      data: { name: name, qty: qty, amount: amount },
      success: function (response) {
        $('#newUpdate').modal('hide');
        location.reload();
      }
    });
  });

  // update item
  $('#updateForm').submit(function (e) { 
    e.preventDefault();
    var id = $(this).find('#itemId').val();
    var name = $(this).find('#itemName').val();
    var qty = $(this).find('#itemQuantity').val();
    var amount = $(this).find('#itemAmount').val();
    
    $.ajax({
      type: "put",
      url: "/api/items/" + id,
      data: { name: name, qty: qty, amount: amount },
      success: function (response) {
        // console.log(response);
        $('#modalUpdate').modal('hide');
        location.reload();
      }
    });
  });

  // get list of items
  function getListOfItems() {
    $.ajax({
      type: "get",
      url: "/api/items",
      success: function (response) {
        $.each(response.data, function (index, value) { 
          $('#itemTable').find('tbody')
            .append("<tr> \
                <td scope='row'>"+ value.id +"</td> \
                <td>"+ value.name +"</td> \
                <td>"+ value.qty +"</td> \
                <td>$"+ value.amount +"</td> \
                <td> \
                <button type='button' class='btn btn-outline-primary btn-sm update' data-toggle='modal' data-target='#modalUpdate' data-id='"+ value.id +"'> \
                  <i class='fa fa-edit' aria-hidden='true'></i> Update \
                </button> \
                <button type='button' class='btn btn-outline-danger btn-sm ml-2 remove' data-toggle='modal' data-target='#modalRemove' data-id='"+ value.id +"'> \
                  <i class='fa fa-remove' aria-hidden='true'></i> Delete \
                </button> \
                </td>\
              </tr>");
        });
      }
    });
  }

});