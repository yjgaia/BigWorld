BigWorld.ObjectModel = OBJECT({
	
	preset : () => {
		return BigWorld.MODEL;
	},
	
	params : () => {

		let validDataSet = {
			
			folderId : {
				id : true
			},
			
			name : {
				notEmpty : true,
				size : {
					max : 255
				}
			}
		};
		
		return {
			name : 'Object',
			methodConfig : {
				create : {
					valid : VALID(validDataSet)
				},
				update : {
					valid : VALID(validDataSet)
				}
			}
		};
	}
});
