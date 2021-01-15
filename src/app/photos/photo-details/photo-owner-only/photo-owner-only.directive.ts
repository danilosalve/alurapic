import { Directive, Renderer, ElementRef } from "@angular/core";
import { Photo } from "../../photo/photo";
import { Input } from "@angular/core";
import { UserService } from "src/app/core/user/user.service";

@Directive({
    selector :'[photoOwnerOnly]'
})
export class PhotoOwnerOnlyDirective {

    @Input() ownedPhoto: Photo;

    constructor(
        private element: ElementRef<any>,
        private renderer: Renderer,
        private UserService: UserService
) {}

    ngOnInit() : void {
        this.UserService
            .getUser()
            .subscribe(user => {
                 if(!user || user.id != this.ownedPhoto.userId) {
                    this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
                }
            });
    }
}