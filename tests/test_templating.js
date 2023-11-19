/**
 * Tests escenarios for templating stuff.
 */

import { describe, test } from 'node:test'
import assert from 'node:assert/strict'
import funcs from '../lib/funcs.js'

const mocking = {};

mocking.makeMockForSimplePartials = (mockObject, templatesMock) => {
    mockObject.method(funcs, 'loadTemplate', (template) => {
        return new Promise((resolve, reject) => {
            resolve(templatesMock[template])
        })
    });
}

mocking.makeMockForNestedPartials = (mockObject, templatesMock) => {
    mockObject.method(funcs, 'loadTemplate', (template) => {
        return new Promise((resolve, reject) => {
            resolve(templatesMock[template])
        })
    });
}

describe('When the template contains partials', () => {
    test('It should include child partials when found', (t) => {
        // Given there is template with 2 partial templates.
        const templatesMock = {
            'template': '<p>${name} is partial{chidlTemplateA} partial{chidlTemplateB} old</p>',
            'chidlTemplateA': '<span>${age}</span>',
            'chidlTemplateB': '<b>${time}</b>',
        };
        mocking.makeMockForSimplePartials(t.mock, templatesMock)

        // When the template is loaded.
        const thenable = funcs.renderTemplate('template')

        // Then the partial tokens should be replaced by the html of the partial.
        thenable.then(html => {
            assert.strictEqual(
                html,"<p>${name} is <span>${age}</span> <b>${time}</b> old</p>"
                );
        })
    });

    test('It should include nested partials when found too', (t) => {
        // Given there is template with nested partials.
        const templatesMock = {
            'template': '<p>${name} is partial{childTemplate} old</p> partial{nestedTemplate}',
            'childTemplate': '<span>${age} partial{nestedTemplate}</span>',
            'nestedTemplate': '<b>${time}</b>',
        };
        mocking.makeMockForNestedPartials(t.mock, templatesMock)

        // When the template is loaded.
        const thenable = funcs.renderTemplate('template')

        // Then the partial tokens should be replaced by the html of the partial.
        thenable.then(html => {
            assert.strictEqual(
                html, "<p>${name} is <span>${age} <b>${time}</b></span> old</p> <b>${time}</b>"
                );
        })

    });
})
