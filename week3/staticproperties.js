"use strict";
class LibraryMember {
    // Static Properties
    static libraryName = "Central Library";
    static totalMembers = 0;
    // Readonly Property
    memberId;
    // Normal Property
    memberName;
    constructor(name, id) {
        this.memberName = name;
        this.memberId = id;
        // Increase member count
        LibraryMember.totalMembers++;
    }
    // Static Method
    static showLibraryInfo() {
        console.log(`Welcome to ${LibraryMember.libraryName}`);
        console.log("Please maintain silence inside the library.");
    }
    // Instance Method
    displayMember() {
        console.log(`Member Name : ${this.memberName}`);
        console.log(`Member ID   : ${this.memberId}`);
    }
}
// -------- Main Program --------
// Access Static Members
console.log(LibraryMember.libraryName);
LibraryMember.showLibraryInfo();
// Create Objects
const member1 = new LibraryMember("Kiran Kumar", "LIB1001");
const member2 = new LibraryMember("Anitha Rao", "LIB1002");
// Display Details
member1.displayMember();
member2.displayMember();
// Readonly Property
console.log(`Member ID of First User: ${member1.memberId}`);
// Uncommenting the line below gives an error
// member1.memberId = "LIB9999";
// Display Total Members
console.log(`Total Members Registered: ${LibraryMember.totalMembers}`);
