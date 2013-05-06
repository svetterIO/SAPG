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

Ext.define('MyApp.view.Timer', {
    extend: 'Ext.form.Panel',

    config: {
        centered: false,
        layout: {
            type: 'vbox'
        },
        items: [
            {
                xtype: 'container',
                height: 43,
                layout: {
                    align: 'center',
                    pack: 'center',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'textfield',
                        clearIcon: false,
                        label: 'Timer 1',
                        labelWidth: '40%',
                        autoCapitalize: false,
                        autoComplete: false,
                        autoCorrect: false,
                        placeHolder: 'Do',
                        readOnly: false
                    },
                    {
                        xtype: 'checkboxfield',
                        labelAlign: 'right',
                        name: ''
                    }
                ]
            },
            {
                xtype: 'container',
                height: 43,
                layout: {
                    align: 'center',
                    pack: 'center',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Timer 2',
                        labelWidth: '40%'
                    },
                    {
                        xtype: 'checkboxfield',
                        labelAlign: 'right',
                        name: ''
                    }
                ]
            },
            {
                xtype: 'container',
                height: 43,
                layout: {
                    align: 'center',
                    pack: 'center',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Timer 3',
                        labelWidth: '40%'
                    },
                    {
                        xtype: 'checkboxfield',
                        labelAlign: 'right',
                        name: ''
                    }
                ]
            },
            {
                xtype: 'container',
                height: 43,
                layout: {
                    align: 'center',
                    pack: 'center',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Timer 4',
                        labelWidth: '40%'
                    },
                    {
                        xtype: 'checkboxfield',
                        labelAlign: 'right',
                        name: ''
                    }
                ]
            },
            {
                xtype: 'checkboxfield',
                height: 44,
                label: 'Dosen Sperrung',
                labelWidth: '50%'
            }
        ]
    }

});