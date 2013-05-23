/*
 * File: app/view/Timer.js
 *
 * This file was generated by Sencha Architect version 2.2.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.TimerPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.timer',

    config: {
        centered: false,
        layout: {
            type: 'vbox'
        },
        items: [
        	{
        		xtype: 'textfield',
        		id: 'dosenName',
                docked: 'top',
                label: 'Name',
        	},
        	{
        		xtype:'timerList',
        		flex: 1,
        		variableHeights: true,
        	},
        	{
				xtype: 'button',
				itemId: 'saveTimer',
				margin: '1% 25% 5% 25%',
				padding: '1%',
				text: 'speichern'      	
        	}
        ]
    }

});