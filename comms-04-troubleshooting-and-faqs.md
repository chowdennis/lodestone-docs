# Comms Packages — Troubleshooting & FAQs

---

## The artifact I want isn't showing up in the picker

The artifact picker only shows artifacts that already exist in Lodestone. A few things to check:

- **Roadmaps and releases** must be created in the Roadmaps or Releases module before they can be included.
- **Documents** appear in the picker as individual document objects (PRDs, Opportunity Canvases, etc.) associated with Backlog items — they must be generated on a Feature before they appear here.
- **Archived objects** do not appear in the picker. If a roadmap or release was recently archived, restore it first to include it.

If the artifact exists but still doesn't appear, try refreshing the new package page. The artifact list is loaded when the page opens.

---

## Recipients aren't receiving the email

A few possible causes:

- **Check spam or promotions folders.** Automated email from Lodestone may be filtered by some email clients, especially on first receipt.
- **Verify the email addresses.** Typos in the recipient list result in silent delivery failures — the package status shows as sent, but the address doesn't receive it. Review the recipient list on the package detail.
- **Check whether the package was paused.** A paused package does not send. Resume it and wait for the next scheduled send.
- **One-time package already sent.** A package with **Sent** status has delivered and will not send again. Create a new package for the next communication.

---

## I sent the package to the wrong recipients

For a one-time package that has already been sent, there is no recall mechanism — the email has been delivered. If the content was sensitive, inform the recipients directly.

For a recurring package that hasn't sent yet, cancel or pause it, then create a new package with the correct recipient list.

---

## I want to see what was included in a previous send

Packages in the **Sent** or **Active** state retain their send history. The Comms Package Center list shows the last sent date for each package. The artifact links in the delivered email connect to permanent snapshots that remain accessible after the send.

If you need to review the exact content a recipient received, use the snapshot link from the original email — it reflects the artifact at the time of that send, not its current state.

---

## Can I edit a package after it's been created?

Packages cannot be edited after creation. If you need to change the artifact list, recipients, subject line, or cadence, cancel the existing package and create a new one with the updated configuration. Cancellation does not delete the send history of the old package.

---

## The package status shows Scheduled but it hasn't sent yet

A Scheduled package is queued and waiting for its send time. This is expected behavior — no action is needed. If the scheduled time has passed and the package is still showing Scheduled rather than Sent or Active, refresh the page. If the status doesn't update after a refresh, contact support.

---

## Can recipients forward the snapshot links?

Yes. Snapshot links are not access-controlled — anyone with the link can view the snapshot. Keep this in mind when deciding what to include in packages shared with external stakeholders.

---

## How many artifacts can I include in one package?

There is no documented hard limit on artifact count. For readability, packages with a focused set of artifacts (three to five) tend to be clearer for recipients than exhaustive collections. If you find yourself including many artifacts, consider whether multiple targeted packages would serve different audiences better.
