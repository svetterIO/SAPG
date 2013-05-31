/*
 * File: app/view/SteckdosenEdit.js
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

Ext.define('MyApp.view.SteckdosenEdit', {
    extend: 'Ext.form.Panel',
    alias: 'widget.steckdosenEdit',
    id: 'steckdosenEdit',

    config: {
        fullscreen: false,
        hideOnMaskTap: true,
        layout: {
            type: 'fit'
        },
        modal: true,
        scrollable: true,
        items: [
            {
                xtype: 'textfield',
                centered: false,
                docked: 'top',
                itemId: 'name',
                label: 'Name',
                name: 'name',
                autoCapitalize: false,
                autoComplete: false,
                autoCorrect: false
            },
            {
                xtype: 'selectfield',
                centered: false,
                docked: 'top',
                usePicker: false,
                itemId: 'typ',
                label: 'Typ',
                name: 'typ',
                options: [
                    {
                        text: 'Home',
                        value: 'Home'
                    },
                    {
                        text: 'Pro',
                        value: 'Pro'
                    },
                    {
                        text: 'ADV',
                        value: 'ADV'
                    },
                    {
                        text: 'HUT',
                        value: 'HUT'
                    },
                    {
                        text: 'IO',
                        value: 'IO'
                    }
                ]
            },
            {
                xtype: 'textfield',
                docked: 'top',
                itemId: 'externalIp',
                label: 'externe IP',
                labelWidth: '40%',
                name: 'externalIp'
            },
            {
                xtype: 'textfield',
                docked: 'top',
                itemId: 'internalIp',
                label: 'internal IP',
                labelWidth: '40%',
                name: 'internalIp'
            },
            {
                xtype: 'numberfield',
                docked: 'top',
                itemId: 'httpPort',
                label: 'HTTP Port',
                labelWidth: '40%',
                name: 'httpPort'
            },
            {
                xtype: 'textfield',
                docked: 'top',
                itemId: 'userName',
                label: 'Benutzername',
                labelWidth: '40%',
                name: 'userName'
            },
            {
                xtype: 'passwordfield',
                docked: 'top',
                itemId: 'password',
                label: 'Passwort',
                labelWidth: '40%',
                name: 'password'
            },
            {
                xtype: 'button',
                docked: 'top',
                itemId: 'save',
                text: 'speichern'
            }
        ]
    }

});