// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// MIT License. See license.txt

frappe.listview_settings["User"] = {
	add_fields: ["enabled", "user_type", "user_image"],
	filters: [["enabled", "=", 1]],
	prepare_data: function (data) {
		data["user_for_avatar"] = data["name"];
	},
	get_indicator: function (doc) {
		if (doc.enabled) {
			return [__("Active"), "green", "enabled,=,1"];
		} else {
			return [__("Disabled"), "grey", "enabled,=,0"];
		}
	},
	onload: function(listview) {
		/* listview.page.add_menu_item(__("Clear Error Logs"), function() {
			frappe.call({
				method:'frappe.core.doctype.error_log.error_log.clear_error_logs',
				callback: function() {
					listview.refresh();
				}
			});
		}); */
		frappe.call("frappe.desk.desktop.get_desktop_page", {
                	page: "{\"name\":\"Users\",\"title\":\"Users\",\"for_user\":\"\",\"parent_page\":\"\",\"content\":\"[{\\\"type\\\":\\\"header\\\",\\\"data\\\":{\\\"text\\\":\\\"<span+class=\\\\\\\"h4\\\\\\\"><b>Your+Shortcuts</b></span>\\\",\\\"col\\\":12}},{\\\"type\\\":\\\"shortcut\\\",\\\"data\\\":{\\\"shortcut_name\\\":\\\"User\\\",\\\"col\\\":3}},{\\\"type\\\":\\\"shortcut\\\",\\\"data\\\":{\\\"shortcut_name\\\":\\\"Role\\\",\\\"col\\\":3}},{\\\"type\\\":\\\"shortcut\\\",\\\"data\\\":{\\\"shortcut_name\\\":\\\"Permission+Manager\\\",\\\"col\\\":3}},{\\\"type\\\":\\\"shortcut\\\",\\\"data\\\":{\\\"shortcut_name\\\":\\\"User+Profile\\\",\\\"col\\\":3}},{\\\"type\\\":\\\"shortcut\\\",\\\"data\\\":{\\\"shortcut_name\\\":\\\"User+Type\\\",\\\"col\\\":3}},{\\\"type\\\":\\\"spacer\\\",\\\"data\\\":{\\\"col\\\":12}},{\\\"type\\\":\\\"header\\\",\\\"data\\\":{\\\"text\\\":\\\"<span+class=\\\\\\\"h4\\\\\\\"><b>Reports+&+Masters</b></span>\\\",\\\"col\\\":12}},{\\\"type\\\":\\\"card\\\",\\\"data\\\":{\\\"card_name\\\":\\\"Users\\\",\\\"col\\\":4}},{\\\"type\\\":\\\"card\\\",\\\"data\\\":{\\\"card_name\\\":\\\"Logs\\\",\\\"col\\\":4}},{\\\"type\\\":\\\"card\\\",\\\"data\\\":{\\\"card_name\\\":\\\"Permissions\\\",\\\"col\\\":4}}]\",\"public\":1,\"module\":\"Core\",\"icon\":\"users\",\"label\":\"Users\",\"is_editable\":true,\"selected\":true}"
            	})
            	.then((data) => {
			frappe.msgprint(data.mesage);

			let totalItemsLinks = data.message.cards.items

			for (let i = 0; i < totalItemsLinks.length; i++) {
				for (let j = 0; j < totalItemsLinks[i].links.length; j++) {
					listview.page.add_inner_button(__(totalItemsLinks[i].links[j].label), function () {
					frappe.set_route("List", totalItemsLinks[i].links[j].label);
				},__("Roles & Permission"));
			}
		}


		});
	}
};

//frappe.help.youtube_id["User"] = "8Slw1hsTmUI";
