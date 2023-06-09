import { createElement } from 'lwc';
import RelatedList from 'c/relatedList';

describe('c-related-list', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        const element = createElement('c-related-list', {
            is: RelatedList
        });
        element.state = {recordId : '12342kkdn342uio'}
        document.body.appendChild(element);

        const edit = element.shadowRoot.querySelector('c-related-list-new-edit-popup');
        edit.dispatchEvent(new CustomEvent('refreshdata'));

        const del = element.shadowRoot.querySelector('c-related-list-delete-popup');
        del.dispatchEvent(new CustomEvent('refreshdata'));

        return Promise.resolve().then(() => {
            console.log(element.state);
           
            expect(1).toBe(1);
        });
 
        
       
    });
});